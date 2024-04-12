from django.db import models
from django.contrib.auth.models import User

class TestModel(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

class TimerModel(models.Model):
    time = models.IntegerField()
# models.py


from django.db import models

class CustomUser(models.Model):
    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.username














