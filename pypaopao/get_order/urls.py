from django.urls import path

from get_order import views

urlpatterns = [
    path(r'getorder/', views.getorder, name='getorder'),
    path(r'acceptorder/', views.acceptorder, name='acceptorder'),
    path(r'allorder/', views.allorder, name='allorder'),
    path(r'myxorder/', views.my_x_order, name='my_x_order'),
    path(r'myjorder/', views.my_j_order, name='my_j_order'),
]