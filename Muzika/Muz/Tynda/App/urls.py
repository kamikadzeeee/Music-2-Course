from django.urls import path
from . import views

urlpatterns = [
    path('', views.App, name='App'),
    path('music/',views.music ,name='music'),
    path('about/',views.about,name='about'),
    path('tour/',views.tour,name='tour'),
    path('release/',views.release,name='release'),
    path('contact/',views.contact,name='contact'),
]