from django.db import models
#from users.forms import User
from django.contrib.auth.models import User
from django.utils import timezone
from django.core.validators import FileExtensionValidator

class ProjectModel(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    #image = models.ImageField(default='default.jpg', upload_to='projects_images/%Y-%m-%d/')
    #file = models.FileField(upload_to='projects/%Y-%m-%d/')
    image = models.ImageField(default='default.jpg', upload_to='projects_images/')
    file = models.FileField(upload_to='projects/')
    path = models.CharField(max_length=100)
    date_posted = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class TestModel(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    #image = models.ImageField(default='default.jpg', upload_to='projects_images/%Y-%m-%d/')
    #file = models.FileField(upload_to='projects/%Y-%m-%d/')
    #path = models.CharField(max_length=100)
    date_posted = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class MainPage(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    rating = models.IntegerField(blank=True)
    #image = models.ImageField(default='default.jpg', upload_to='projects_images/%Y-%m-%d/')
    #file = models.FileField(upload_to='projects/%Y-%m-%d/')
    image = models.ImageField(default='default.jpg', upload_to='projects_images/')
    file = models.FileField(upload_to='projects/')
    path = models.CharField(max_length=100)
    date_posted = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class Team(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    leader = models.ForeignKey(User, on_delete=models.CASCADE, related_name='team_leader')
    members = models.ManyToManyField(User, related_name='team_members')

    def __str__(self):
        return self.name
