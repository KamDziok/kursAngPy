from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.template import RequestContext
from django.urls import reverse_lazy
from django.views import generic
from django.views.decorators.csrf import requires_csrf_token, csrf_protect, csrf_exempt
from django.views.generic import ListView

from .models import Test, Pytania


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
    print(testch)
    pytania = Pytania.objects.filter(test = testch)
    return render(request,'test.html',{'pytania':pytania})
    # return render_to_response('test.html',{"pytania": pytania},context_instance=RequestContext(request))
