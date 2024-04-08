from django.urls import path
from rest_framework import routers
from .views import vote_project
from .views import *
from django.views.generic import TemplateView

# router = routers.DefaultRouter()
# router.register('project', ProjectViewSet)
#
# urlpatterns = router.urls

urlpatterns = [
    path('', LeadProjectCreate.as_view()),
    path('get_project/<str:file_name>', WebHtmlDocumentView.as_view()),
    path('mainpage/', MainPageListCreateView.as_view()),
    path('page', MainPageListCreateView.as_view()),
    path('page/<int:pk>/', MainPageDetailView.as_view()),
    path('mainpage/<int:pk>/', MainPageDetailView.as_view()),
    path('project/<int:pk>/vote/', vote_project, name='vote_project'),

    
    #path('profile/<int:profile_id')
    #path('rating/'),
    #path('login/'),
    #path('register/')
    #path('')
    #test
]
