# from django.shortcuts import render

# from rest_framework.decorators import api_view
# from rest_framework.response import Response

# @api_view(['GET'])
# def hello_world(request):
#     return Response({'message': 'Hello, world!'})
from django.http import JsonResponse
from datetime import datetime

from django.http import HttpResponse

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