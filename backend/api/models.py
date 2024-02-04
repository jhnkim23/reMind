from django.db import models

# Create your models here.
class Transcript(models.Model):
    input_file = models.FileField(default="models.py")
    input_data = models.CharField(max_length = 300, default = "")
    output_filename = models.CharField(max_length = 300, default = "")
    created_at = models.DateTimeField(auto_now_add = True)
