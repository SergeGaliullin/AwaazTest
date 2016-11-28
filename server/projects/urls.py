from django.conf.urls import url
from rest_framework.routers import DefaultRouter

from .views import ProjectsViewSet, TaskList, TaskViewSet
from .views import home_page

urlpatterns = [
    url(r'^$', home_page, name='home_page'),    
]

router = DefaultRouter()
router.register(r'projects', ProjectsViewSet, base_name='ProjectsViewSet')
router.register(r'tasks', TaskViewSet, base_name='TaskViewSet')
router.register(r'project/(?P<project_id>\d+)/tasks', TaskList, base_name='TaskList')


urlpatterns += router.urls
