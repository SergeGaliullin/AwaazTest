from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProjectSerializer, TaskSerializer
from .models import Project, Task

class ProjectsViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()