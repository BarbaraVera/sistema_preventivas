from django.urls import path
from App.agendar_hora import views

urlpatterns = [
    path('', views.agenda_hora, name="inicio_agendar_hora"),
]