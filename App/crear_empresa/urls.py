from django.urls import path
from App.crear_empresa import views

urlpatterns = [
    path('', views.crear_empresa, name="inicio_crear_empresa"),
    path('insertar_empresa/', views.insertar_empresa, name="insertar_empresa"),
    path('existe_empresa/<str:cod_empresa>', views.existe_empresa, name="existe_empresa"),
]