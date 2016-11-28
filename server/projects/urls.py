from django.conf.urls import url
from rest_framework.routers import DefaultRouter

from .views import ProjectsViewSet, TaskViewSet

urlpatterns = []

router = DefaultRouter()
router.register(r'projects', ProjectsViewSet, base_name='ProjectsViewSet')

urlpatterns += router.urls
