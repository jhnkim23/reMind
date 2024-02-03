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
            input_data = serializer.data.input_data
            #Call the Whisper Script I think? and like make a transcript field
            #then j slot it into the same folder?
            queryset = Transcript.objects.filter(input_data = input_data)
            if queryset.exists() == False:
                #maybe generate a random code to slot into end of filename, to be able to store in same folder
                #for now
                #Idk if these are going to be stored long term here, maybe Gman's script deletes these?
                transcript = Transcript(input_data = input_data, output_filename = "audio_output.txt")
                transcript.save()
            else:
                room = queryset[0]
            return Response(TranscriptSerializer(transcript).data, status=status.HTTP_200_OK) 
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)