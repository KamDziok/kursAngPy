from django.shortcuts import render
from django.urls import reverse_lazy

from kurs import models as m

# Create your views here.


def renderMenu(request):
    menu = m.Kategorie.objects.all()
    return render(request, 'base.html', {'menu': menu})


def renderDzial(request):
    dzial = m.Dzial.objects.all()
    return render(request, 'base.html', {'dzial': dzial})


def renderTemat(request):
    temat = m.Temat.objects.all()
    return render(request, 'base.html', {'temat': temat})
