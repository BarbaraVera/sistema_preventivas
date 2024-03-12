from django.urls import path
from App.crear_empresa import views

urlpatterns = [
    path('', views.crear_empresa, name="inicio_crear_empresa"),
]