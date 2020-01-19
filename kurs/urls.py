from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('gramatyka_present_countinuous', TemplateView.as_view(template_name='gramar/gramatyka_present_countinuous.html'), name='gramatyka_present_countinuous'),
    path('gramar/lorem', TemplateView.as_view(template_name='gramar/lorem.html'), name='gramar_lorem'),
    path('body_parts', TemplateView.as_view(template_name='vocabulary/body_parts.html'), name='body_parts'),
    path('idiomy', TemplateView.as_view(template_name='vocabulary/idiomy.html'), name='idiomy'),
    path('idiomy_przyklady', TemplateView.as_view(template_name='vocabulary/idiomy_przyklady.html'), name='idiomy_przyklady'),
    path('vocabulary/lorem', TemplateView.as_view(template_name='vocabulary/lorem.html'), name='vocabulary_lorem'),
    path('bee', TemplateView.as_view(template_name='phonetics/bee.html'), name='bee'),
    path('phonetics/lorem', TemplateView.as_view(template_name='phonetics/lorem.html'), name='phonetics_lorem'),
    path('culture/geographical_identities', TemplateView.as_view(template_name='culture/geographical_identities.html'), name='geographical_identities'),
    path('culture/lorem', TemplateView.as_view(template_name='culture/lorem.html'), name='culture_lorem'),
]
