from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from .models import Track

def App(request):
    return render(request,"index.html")
def music(request):
    return render(request,"music.html")
def about(request):
    return render(request,"index.html")
def tour(request):
    return render(request,"index.html")
def release(request):
    return render(request,"index.html")
def contact(request):
    return render(request,"index.html")

# def play_track(request, track_id):
#     track = get_object_or_404(Track, pk=track_id)
#     return render(request, 'play_track.html', {'track': track})
# def track_list(request):
#     tracks = Track.objects.all()
#     return render(request, 'track_list.html', {'tracks': tracks})