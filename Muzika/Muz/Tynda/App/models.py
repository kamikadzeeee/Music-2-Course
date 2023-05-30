from django.db import models

class Track(models.Model):
    title = models.CharField(max_length=255)
    audio_file = models.FileField(upload_to='audio/')

    def __str__(self):
        return self.title
