from django.db import models

class Announcement(models.Model):

    title = models.CharField(max_length=20)
    text = models.CharField(max_length=150)
