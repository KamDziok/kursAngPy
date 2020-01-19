from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Test(models.Model):
    # artist = models.ForeignKey(Musician, on_delete=models.CASCADE)
    test = models.CharField('Nazwa testu', max_length=50)
    # release_date = models.DateField()
    # num_stars = models.IntegerField()
    class Meta:
        verbose_name = "Test"
        verbose_name_plural = "Testy"

        def __unicode__(self):
            return self.name

class Pytania(models.Model):
    test = models.ForeignKey(Test, on_delete=models.CASCADE)
    pytanie = models.CharField('Pytanie', max_length=50)
    odp_pierwsza = models.CharField('Odpowiedz pierwsza', max_length=50)
    odp_druga = models.CharField('Odpowiedz druga', max_length=50)
    odp_trzecia = models.CharField('Odpowiedz trzecia', max_length=50)
    odp_czwarta = models.CharField('Odpowiedz czwarta', max_length=50)
    odp_poprawna = models.IntegerField('Poprawna odpowiedz')

    class Meta:
        verbose_name = "Pytanie"
        verbose_name_plural = "Pytania"

        def __unicode__(self):
            return self.name

class TestyUzytkownikow(models.Model):
    test = models.ForeignKey(Test, on_delete=models.CASCADE)
    uzytkownik = models.ForeignKey(User, on_delete=models.CASCADE)
    wynik = models.IntegerField()

    class Meta:
        verbose_name = "TestUzytkownik"
        verbose_name_plural = "TestyUzytkownicy"

        def __unicode__(self):
            return self.name
