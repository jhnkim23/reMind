# from django.urls import path
# from . import views

# urlpatterns = [
#     path('hello-world/', views.hello_world, name='hello_world'),
# ]
from django.contrib import admin
from django.urls import path
from .views import CreateTranscriptView

from . import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('upload_transcript/', views.upload_transcript)

]