# from django.shortcuts import render

# from rest_framework.decorators import api_view
# from rest_framework.response import Response

# @api_view(['GET'])
# def hello_world(request):
#     return Response({'message': 'Hello, world!'})

from django.http import JsonResponse
from datetime import datetime

from .models import Transcript
from .serializers import TranscriptSerializer, CreateTranscriptSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import openai
from openai import OpenAI
import sys
import json
import subprocess
from .recursive_algo import func
api = ''
from .whisper_transcribe import transcribe

client=OpenAI(api_key = api)
def home(request):
    return HttpResponse("Welcome to the backend!") 
def index(request):
    current_time = datetime.now().strftime("%-I:%S %p")
    current_date = datetime.now().strftime("%A %m %-Y")

    data = {
        'time': current_time,
        'date': current_date,
    }

    return JsonResponse(data)

@csrf_exempt
def upload_transcript(request):
    if request.method == 'POST' and request.FILES['text file']:
        # Example: Process text data
        file = request.FILES['text file']
        contents= file.read().decode("utf-8")
        print(contents)
        response = client.chat.completions.create(model="gpt-3.5-turbo-16k",
                                             messages=[ { "role": "system",
                                                        "content": "Given a transcript, your job is to highlight concrete details from the transcription of a meeting down to a main topic and a list of topics. Quotes, summaries, sub-topics should be at max 20 words. Minimize the amount of sub-topics related to the main topic. Maximum of three quotes per sub-topic node.  Each sub-topic should have overarching summarized information. Each sub-topics should have more sub-topics, if any, and should have quotes and concrete details listed from the speakers. Format the output in JSON format as follows below:\n\n\"\"\"\n{\n  \"title\": \"\",\n  \"summary\": \"\",\n  \"sub-topics\": [\n    {\n      \"title\": \"\",\n      \"summary\": \"\",\n      \"quotes\":[\"\"]\n      \"sub_topics\": [\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n      ]\n    },\n    {\n      \"title\": \"\",\n      \"summary\": \"\",\n      \"quotes\":[\"\"]\n      \"sub_topics\": [\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n      ]\n    },\n    {\n      \"title\": \"\",\n      \"summary\": \"\",\n      \"quotes\":[\"\",\"\"]\n      \"sub_topics\": [\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n      ]\n    },\n    {\n      \"title\": \"\",\n      \"summary\": \"\",\n      \"quotes\":[\"\"]\n      \"sub_topics\": [\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n      ]\n    }\n]\n}\n\"\"\""
                                                        },
                                                        {"role":"user",
                                                         "content":contents}],
                                             temperature=0.5,
                                             max_tokens=8000,
                                             top_p=1,
                                             frequency_penalty=0,
                                             presence_penalty=0
        )
        file_writer=open("abc.json","w")
        file_writer.write(response.choices[0].message.content)
        file_writer.close()
        x=json.dumps(func("abc.json"))
        return JsonResponse(x, status=200,safe=False)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)



class TranscriptView(generics.ListAPIView):
    queryset = Transcript.objects.all()
    serializer_class = TranscriptSerializer

class CreateTranscriptView(APIView):
    serializer_class = CreateTranscriptSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            #input_data = request.data.get('input_data')
            input_file = request.FILES.get('input_file')
            for key in request.FILES:
                filename = request.FILES[key]._get_name()
                input_file = request.FILES[key].file
                print(request.FILES[key].content_type)

            #with open(filename, "w") as dest:
            #    for chunk in input_file.chunks():
            #        dest.write(chunk) 
            input_data = transcribe(input_file, filename)
            #input_data = serializer.data.get('input_data')
            
            with open(input_data,"r") as file:
                contents= file.read()
                print(contents)
                response = client.chat.completions.create(model="gpt-3.5-turbo-16k",
                                                    messages=[ { "role": "system",
                                                                "content": "Given a transcript, your job is to highlight concrete details from the transcription of a meeting down to a main topic and a list of topics. Quotes, summaries, sub-topics should be at max 20 words. Minimize the amount of sub-topics related to the main topic. Maximum of three quotes per sub-topic node.  Each sub-topic should have overarching summarized information. Each sub-topics should have more sub-topics, if any, and should have quotes and concrete details listed from the speakers. Format the output in JSON format as follows below:\n\n\"\"\"\n{\n  \"title\": \"\",\n  \"summary\": \"\",\n  \"sub-topics\": [\n    {\n      \"title\": \"\",\n      \"summary\": \"\",\n      \"quotes\":[\"\"]\n      \"sub_topics\": [\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n      ]\n    },\n    {\n      \"title\": \"\",\n      \"summary\": \"\",\n      \"quotes\":[\"\"]\n      \"sub_topics\": [\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n      ]\n    },\n    {\n      \"title\": \"\",\n      \"summary\": \"\",\n      \"quotes\":[\"\",\"\"]\n      \"sub_topics\": [\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n      ]\n    },\n    {\n      \"title\": \"\",\n      \"summary\": \"\",\n      \"quotes\":[\"\"]\n      \"sub_topics\": [\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n        {\n          \"title\": \"\",\n          \"summary\":\"\" ,\n          \"quotes\":[\"\"]\n\t  \"sub-topics\":[]\n\t  \n        },\n      ]\n    }\n]\n}\n\"\"\""
                                                                },
                                                                {"role":"user",
                                                                "content":contents}],
                                                    temperature=0.5,
                                                    max_tokens=8000,
                                                    top_p=1,
                                                    frequency_penalty=0,
                                                    presence_penalty=0
                )
                file_writer=open("abc.json","w")
                file_writer.write(response.choices[0].message.content)
                file_writer.close()
                x=json.dumps(func("abc.json"))
                return JsonResponse(x, status=200,safe=False)
    
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)


        
