from rest_framework import serializers
from .models import Transcript

class TranscriptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transcript
        fields = ('id','input_file','input_data', 'output_filename', 'created_at')

class CreateTranscriptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transcript
        fields = ('id','input_data', 'input_file')
        