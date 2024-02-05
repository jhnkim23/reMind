# from django.urls import path
# from . import views

# urlpatterns = [
#     path('hello-world/', views.hello_world, name='hello_world'),
# ]
from django.contrib import admin
from django.urls import path
from .views import index
from .views import home
from .views import CreateTranscriptView
from .views import upload_transcript

urlpatterns = [
    path('', index),
    path('create-transcript/', CreateTranscriptView.as_view()),
    path('upload_transcript/', upload_transcript)
]