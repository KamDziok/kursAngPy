from django.contrib import admin
from django.urls import path
from accounts import views

urlpatterns = [
    path('signup', views.SignUp.as_view(), name='signup'),
    # path('admin/', admin.site.urls),
    # path('test', views.SignUp.as_view(), name='signup'),
]
