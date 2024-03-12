from django.urls import path
from App.lista_hora_agendada import views

urlpatterns = [
    path('', views.lista_agenda, name="inicio_lista_hora_agendada"),
]