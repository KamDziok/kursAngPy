from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

from accounts import views

urlpatterns = [
    path('signup', views.SignUp.as_view(), name='signup'),
    path('user', views.TestListView.as_view(), name='user'),
    # path('test/<slug:testch>/', views.PytaniaTest, name="test"),
    path('test/(?P<testch>[-a-zA-Z0-9_]+)\\', views.PytaniaTest, name="test"),
    # path('user', views.TestListView, name='user'),
    # path('admin/', admin.site.urls),
    # path('test', views.SignUp.as_view(), name='signup'),
]
