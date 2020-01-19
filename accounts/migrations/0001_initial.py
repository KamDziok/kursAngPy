# Generated by Django 3.0.1 on 2020-01-18 19:38

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Test',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('test', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='TestyUzytkownikow',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('wynik', models.IntegerField()),
                ('test', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.Test')),
                ('uzytkownik', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Pytania',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pytanie', models.CharField(max_length=50)),
                ('odp_pierwsza', models.CharField(max_length=50)),
                ('odp_druga', models.CharField(max_length=50)),
                ('odp_trzecia', models.CharField(max_length=50)),
                ('odp_czwarta', models.CharField(max_length=50)),
                ('odp_poprawna', models.IntegerField()),
                ('test', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.Test')),
            ],
        ),
    ]