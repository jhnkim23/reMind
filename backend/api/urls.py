# from django.urls import path
# from . import views

# urlpatterns = [
#     path('hello-world/', views.hello_world, name='hello_world'),
# ]
from django.contrib import admin
from django.urls import path
from .views import index
from .views import process_text
from .views import home
from .views import CreateTranscriptView

urlpatterns = [
    path('', index),
    path('process_text/', process_text, name='process_text'), 
    path('create-transcript/', CreateTranscriptView.as_view())

]