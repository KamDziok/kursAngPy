from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

from accounts import views
from .views import TestListView

urlpatterns = [
    path('signup', views.SignUp.as_view(), name='signup'),
    path('user', TestListView.as_view(), name='user'),
    # path('user', TemplateView.as_view(template_name='user.html'), name='user'),
    # path('admin/', admin.site.urls),
    # path('test', views.SignUp.as_view(), name='signup'),
]
