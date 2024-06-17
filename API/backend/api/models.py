from django.db import models


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


from django.utils import timezone


class Project(models.Model):
    title = models.CharField(max_length=200)  # название проекта
    description = models.TextField()  # описание проекта
    how_to_play = models.TextField()  # как играть
    rating = models.DecimalField(max_digits=5, decimal_places=2, default=0)  # кол-во рейтинга
    views = models.IntegerField(default=0)  # кол-во просмотров проекта
    date_posted = models.DateTimeField(default=timezone.now)
    categories = models.CharField(max_length=100, default='arcade')

    total_votes = models.IntegerField(default=0)  # Новое поле для общего количества голосов
    total_rating = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    main_image = models.ImageField(upload_to='project_images/', default='project_images/default.jpg', null=True, blank=True)
    #webgl_file = models.FileField(upload_to='webgl_projects/', default='webgl_projects/Birdie_Fall.zip', null=True, blank=True)

    file = models.FileField(upload_to='projects/', default='projects/Title')
    path = models.CharField(max_length=100, default='/')
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    #screenshots = models.ManyToManyField('Screenshot', related_name='projects', blank=True)
    def __str__(self):
        return self.title

class Screenshot(models.Model):
    image = models.ImageField(upload_to='project_screenshots/')

    def __str__(self):
        return self.image.name

class Team(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    custom_user = models.ManyToManyField(CustomUser)
    project = models.ManyToManyField(Project)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'team'
        verbose_name_plural = 'teams'
        ordering = ('id',)


class SiteConfiguration(models.Model):
    voting_deadline = models.DateTimeField() # время голосования

