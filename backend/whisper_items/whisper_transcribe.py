import os
from subprocess import call
from faster_whisper import WhisperModel
import sys
from pydub import AudioSegment


model_size = "large-v2"


model = WhisperModel(model_size, device="cpu", compute_type="int8") 
audio_file = sys.argv[1]
print(audio_file)
count = 1

while count < len(audio_file):
    if audio_file[-1*count] == ".":
        file_type = audio_file[-1*count:]
    count+=1
if file_type == ".flac":
    segments, info = model.transcribe(audio_file, beam_size=1)

    print("Detected language '%s' with probability %f" % (info.language, info.language_probability))


    with open("output.txt", "w") as f:
        count = 0
        for segment in segments:
            f.write("%s \n" % (segment.text))
            count += 1
            if count > 10:
                break


        #JUST RUN WHISPER
else:
    file_type = file_type[1:]
    file = AudioSegment.from_file(audio_file, file_type)
    flac_name = audio_file.replace(file_type, "flac")
    flac = file.export(flac_name, format = "flac")
    segments, info = model.transcribe(flac_name, beam_size=1)

    print("Detected language '%s' with probability %f" % (info.language, info.language_probability))


    with open("output.txt", "w") as f:
        count = 0
        for segment in segments:
            f.write("%s \n" % (segment.text))
            count += 1
            #if count > 10:
            #    break