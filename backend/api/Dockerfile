FROM python:latest

ENV PYTHONUNBUFFERED=1

WORKDIR /api

RUN pip install django django-cors-headers
RUN pip install django django-cors-headers

COPY . . 

EXPOSE 8000
