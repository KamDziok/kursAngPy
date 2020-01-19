from django.contrib import admin
from .models import Test
from .models import TestyUzytkownikow
from .models import Pytania

admin.site.register(Test)
admin.site.register(TestyUzytkownikow)
admin.site.register(Pytania)

# Register your models here.
