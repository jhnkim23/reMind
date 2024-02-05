from pytube import YouTube

YouTube('https://youtu.be/DJWq4jba6BQ').streams.first().download() 
yt = YouTube('https://www.youtube.com/watch?v=DJWq4jba6BQ')
a = yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first().download()
