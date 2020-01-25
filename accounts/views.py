from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.template import RequestContext
from django.urls import reverse_lazy
from django.views import generic
from django.views.decorators.csrf import requires_csrf_token, csrf_protect, csrf_exempt
from django.views.generic import ListView

from .models import Test, Pytania, TestyUzytkownikow
from django.contrib.auth.models import User


class SignUp(generic.CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'signup.html'


class TestListView(ListView):
    model = Test
    context_object_name = 'testy'
    success_url = reverse_lazy('user')
    template_name = 'user.html'


# def TestListView(request):
#     testy = Test.test
#     # print(testy)
#     return render(request,'user.html',{'testy':testy})

# @requires_csrf_token
# @csrf_protect
@csrf_exempt
def PytaniaTest(request, testch):
    pytania = Pytania.objects.filter(test = testch)
    return render(request,'test.html',{'pytania':pytania})

def sample_view(request):
    current_user = request.user
    return current_user.id

@csrf_exempt
def Result(request):
    if request.method == 'POST':
        data = request.POST
        datas = dict(data)
        print(datas)
        total = 0
        good = 0
        wynik = 0.0
        for answer in datas:
            total += 1
            x = answer.split("_")
            id = int(x[1])
            test = Pytania.objects.get(id = id).test
            # print(f"id: {id} odp: {datas[answer]}")
            poprawna = Pytania.objects.get(id = id).odp_poprawna
            # print(poprawna)
            if(poprawna == int(datas[answer][0])):
                good += 1
                # print("dobrze")
        # print(f"total: {total}, good: {good}")
        wynik = (good / total) * 100
        wynik = round(wynik, 2)
        if wynik > 50:
            rezultat = True
        else:
            rezultat = False
        doBazy = TestyUzytkownikow()
        doBazy.wynik = wynik
        doBazy.uzytkownik = User.objects.get(id = sample_view(request))
        doBazy.test = test
        # print(User.objects.get(id = sample_view(request)))
        doBazy.save()
        print(f"doBazy: {doBazy.test}, {doBazy.uzytkownik}, {doBazy.wynik}")
    return render(request,'spr.html',{"wynik":wynik,"rezultat":rezultat})
