from django.contrib import admin
from .models import Kategorie, Dzial, Temat

# Register your models here.

admin.site.register(Kategorie)
admin.site.register(Dzial)
admin.site.register(Temat)