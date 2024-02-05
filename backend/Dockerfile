FROM python:latest

ENV PYTHONUNBUFFERED=1

WORKDIR /api

RUN pip install django django-cors-headers
RUN pip install django djangorestframework
RUN pip install openai
RUN pip install Naked
COPY . . 








EXPOSE 8000
