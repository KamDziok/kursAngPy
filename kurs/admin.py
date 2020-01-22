from django.contrib import admin

from accounts.models import TestyUzytkownikow, Pytania, Test

admin.site.register(Test)
admin.site.register(TestyUzytkownikow)
admin.site.register(Pytania)

# Register your models here.
