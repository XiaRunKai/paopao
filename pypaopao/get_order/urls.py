from django.urls import path

from get_order import views

urlpatterns = [
    path(r'getorder/', views.getorder, name='getorder'),
    path(r'allorder/', views.allorder, name='allorder'),
]