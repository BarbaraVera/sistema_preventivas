from django.urls import path
from App.crear_paquete import views

urlpatterns = [
    path('', views.crear_paquete, name="inicio_crear_paquete"),
]