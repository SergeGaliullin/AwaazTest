from .models import Project, Task

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('name', 'description', 'duration', 'avatar', )


class TaskSerializer(serializers.ModelSerializer):
    project = serializers.PrimaryKeyRelatedField(source='project', queryset=Project.objects.all())
    class Meta:
        model = Task
        fields = ('project', 'name', 'description', 'start_date', 'end_date', )