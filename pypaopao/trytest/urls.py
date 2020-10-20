from django.urls import path

from . import views
app_name = 'trytest'

urlpatterns = [
    path('', views.index, name='index'),
    path(r'sign/', views.sign, name='sign'),
    path(r'register/', views.register, name='register')
]