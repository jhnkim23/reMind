FROM python:3.8-slim-bullseye

ENV PYTHONUNBUFFERED=1

WORKDIR /api

RUN apt-get update && \
    apt-get install -y --no-install-recommends gcc libc6-dev && \
    rm -rf /var/lib/apt/lists/*

RUN pip install django django-cors-headers
RUN pip install django djangorestframework
RUN pip install openai
RUN pip install Naked
RUN pip install ffmpeg
RUN pip install faster-whisper
RUN pip install pydub


COPY . . 








EXPOSE 8000
