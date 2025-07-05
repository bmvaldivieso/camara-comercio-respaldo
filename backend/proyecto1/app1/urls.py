"""
    Manejo de urls para la aplicación
    app1
"""
from django.urls import path
# se importa las vistas de la aplicación
from . import views


urlpatterns = [
        path('', views.index, name='index'),
        path('login', views.login, name='login'),
        path('register', views.register, name='register'),
        path('master', views.master, name='master'),
        path('categorias', views.categorias, name='categorias'),
        path('servicios', views.servicios, name='servicios'),
        path('subservicios', views.subservicios, name='subservicios'),
 ]