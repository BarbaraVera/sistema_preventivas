from django.urls import path
from App.crear_paquete import views

urlpatterns = [
    path('', views.crear_paquete, name="inicio_crear_paquete"),
    path('filtro_tipo_prestacion/<str:cod_tipo_prestacion>', views.filtro_tipo_prestacion, name = "filtrar_prestacion" ),
]