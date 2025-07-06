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
        path('masteradmin', views.masteradmin, name='masteradmin'),
        path('dashboard', views.dashboard, name='dashboard'),
        path('admin_usuarios', views.admin_usuarios, name='admin_usuarios'),
        path('admin_usuarios_incremento', views.admin_usuarios_incremento, name='admin_usuarios_incremento'),
        path('admin_socios', views.admin_socios, name='admin_socios'),
        path('admin_socios_formularios', views.admin_socios_formularios, name='admin_socios_formularios'),
 ]