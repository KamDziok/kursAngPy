from django.db import models

# Create your models here.


class Kategorie(models.Model):
    kategoria = models.CharField('Kategoria', max_length=100)

    class Meta:
        verbose_name = "Kategoria"
        verbose_name_plural = "Kategorie"

        def __unicode__(self):
            return self.kategoria


class Dzial(models.Model):
    kategoria = models.ForeignKey(Kategorie, on_delete=models.CASCADE)
    dzial = models.CharField('Temat', max_length=100)

    class Meta:
        verbose_name = "Dzial"
        verbose_name_plural = "Dzialy"

        def __unicode__(self):
            return self.dzial


class Temat(models.Model):
    dzial = models.ForeignKey(Dzial, on_delete=models.CASCADE)
    temat = models.CharField('Temat', max_length=100)
    plik = models.CharField('Plik', max_length=100)

    class Meta:
        verbose_name = "Temat"
        verbose_name_plural = "Tematy"

        def __unicode__(self):
            return self.temat