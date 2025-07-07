from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')
def login(request):
    return render(request, 'login.html')
def register(request):
    return render(request, 'register.html')
def master(request):
    return render(request, 'master.html')    
def categorias(request):
    return render(request, 'categorias.html')
def servicios(request):
    return render(request, 'servicios.html')
def subservicios(request):
    return render(request, 'subservicios.html')
def masteradmin(request):
    return render(request, 'masteradmin.html')
def dashboard(request):
    return render(request, 'dashboard.html')
def admin_usuarios(request):
    return render(request, 'usuarios.html')
def admin_usuarios_incremento(request):
    return render(request, 'usuarios_incremento.html')    
def admin_socios(request):
    return render(request, 'socios.html')
def admin_socios_formularios(request):
    return render(request, 'socios_formularios.html')
def seguro_vida(request):
    return render(request, 'seguro_vida.html')
def seguro_vida_archivos_subidos(request):
    return render(request, 'seguro_vida_archivos_subidos.html')
def seguro_vida_archivos_recibidos(request):
    return render(request, 'seguro_vida_archivos_recibidos.html')
def seguro_vida_estado(request):
    return render(request, 'seguro_vida_estado.html')
def formularios(request):
    return render(request, 'formularios_main.html')
def formularios_form_a(request):
    return render(request, 'formularios_form_a.html')
def formularios_form_b(request):
    return render(request, 'formularios_form_b.html')     
def solicitud_seguro_form(request):
    return render(request, 'solicitud_seguro_form.html')   
      
