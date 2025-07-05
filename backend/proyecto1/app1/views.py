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
