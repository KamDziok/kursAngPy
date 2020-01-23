from django.shortcuts import render
from .models import Kategorie, Dzial, Temat

# Create your views here.


def renderMenu(request):
    menu = Kategorie.kategoria
    return render(request, 'templates/base.html', {'menu': menu})


def renderDzial(request):
    dzial = Dzial.dzial
    return render(request, 'templates/base.html', {'dzial': dzial})


def renderTemat(request):
    temat = Temat.temat
    return render(request, 'templates/base.html', {'temat': temat})
