from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import mixins
from .serializers import ProjectSerializer, TaskSerializer
from .models import Project, Task

class ProjectsViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

class TaskViewSet(mixins.CreateModelMixin, mixins.DestroyModelMixin,
                     mixins.UpdateModelMixin, viewsets.GenericViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

class TaskList(mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = TaskSerializer

    def get_queryset(self):
        id = self.kwargs['project_id']
        return Project.objects.get(pk=id).task_set.all()
