from django.urls import path

from get_order import views

urlpatterns = [
    path(r'getorder/', views.getorder, name='getorder'),
]