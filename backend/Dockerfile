FROM python:latest

ENV PYTHONUNBUFFERED=1

WORKDIR /api

RUN pip install django django-cors-headers
RUN pip install django djangorestframework
RUN pip install openai

COPY . . 






EXPOSE 8000
