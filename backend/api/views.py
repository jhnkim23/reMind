# from django.shortcuts import render

# from rest_framework.decorators import api_view
# from rest_framework.response import Response

# @api_view(['GET'])
# def hello_world(request):
#     return Response({'message': 'Hello, world!'})

from django.http import JsonResponse
from datetime import datetime
from django.http import HttpResponse

from .models import Transcript
from .serializers import TranscriptSerializer, CreateTranscriptSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import os
import sys
from .whisper_transcribe import transcribe
from django.views.decorators.csrf import csrf_exempt 

#from ../whisper_items/whisper_transcribe import transcribe

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

def process_text(request):
    if request.method == 'POST':
        
        # Example: Process text data
        text_data = request.POST.get('text_data')
        # Process text_data...
        # console.log(text_data)
        # Return a response
        return JsonResponse({'message': 'Text processed successfully'}, status=200)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
    
@csrf_exempt
def upload_transcript(request):
    if request.method == 'POST' and request.FILES['text file']:
        # Example: Process text data
        file = request.FILES['text file']
        contents= file.read().decode("utf-8")
        print(contents)
        # Process text_data...
        # console.log(text_data)
        # Return a response
        return JsonResponse({'message': 'Text processed successfully'}, status=200)
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
            
            
            return JsonResponse({'message': 'Audio processed successfully'}, status=200)
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)

        