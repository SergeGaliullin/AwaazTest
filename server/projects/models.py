from django.db import models

# Create your models here.

class Project(models.Model):    
    name = models.CharField(max_length=50)
    description = models.TextField()
    duration = models.CharField(max_length=20)
    avatar = models.ImageField(upload_to='media')

    def __str__(self):
        return self.name
