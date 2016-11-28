from django.db import models

# Create your models here.

class Project(models.Model):    
    name = models.CharField(max_length=50)
    description = models.TextField()
    duration = models.CharField(max_length=20)
    avatar = models.ImageField(upload_to='project_images')

    def __str__(self):
        return self.name

class Task(models.Model):
    project = models.ForeignKey(Project)
    name = models.CharField(max_length=50)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()

    def __str__(self):
        return self.name

