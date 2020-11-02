from django.urls import path

from . import views
app_name = 'trytest'

urlpatterns = [
    path('', views.index, name='index'),
    path(r'login/', views.login, name='login'),
    path(r'register/', views.register, name='register')
]