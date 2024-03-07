from django.urls import path
from App.crear_cliente import views

urlpatterns = [
    path('', views.crear_cliente, name="inicio_crear_cliente"),
]