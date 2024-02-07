import os
from subprocess import call
from faster_whisper import WhisperModel
import sys
from pydub import AudioSegment



def transcribe(file, filename):
    os.environ["KMP_DUPLICATE_LIB_OK"] = "True"
    model_size = "large-v2"
    model = WhisperModel(model_size, device="cpu", compute_type="int8") 

    """
    count = 0
    URL = sys.argv[1]
    response = requests.get(URL)
    content_type = response.headers['content-type']
    print(content_type)
    while count < len(content_type):
        if content_type[-1*count] == ".":
            file_type = content_type[-1*count:]
            break
        count+=1

    open("audio"+file_type, "wb").write(response.content)
    audio_file = "audio"+file_type
    """
    audio_file = filename
    count = 1

    
    while count < len(audio_file):
        if audio_file[-1*count] == ".":
            file_type = audio_file[-1*count:]
            just_name = audio_file[:-1*count]
        count+=1


    if file_type == ".flac":
        segments, info = model.transcribe(file, beam_size=1)

        print("Detected language '%s' with probability %f" % (info.language, info.language_probability))


        with open(just_name+".txt", "w") as f:
            count = 0
            for segment in segments:
                f.write("%s \n" % (segment.text))
                count += 1
                #if count > 10:
                #    break


            #JUST RUN WHISPER
    else:
        file_type = file_type[1:]
        file = AudioSegment.from_file(file, file_type)
        flac_name = audio_file.replace(file_type, "flac")
        flac = file.export(flac_name, format = "flac")
        segments, info = model.transcribe(flac_name, beam_size=1)

        print("Detected language '%s' with probability %f" % (info.language, info.language_probability))


        with open(just_name+".txt", "w") as f:
            count = 0
            for segment in segments:
                f.write("%s \n" % (segment.text))
                count += 1
                #if count > 10:
                #    break
    for i in range(10):
        print("check")
    return just_name+".txt"