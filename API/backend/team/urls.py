from django.urls import path

from .views import *

urlpatterns = [
    path('', TeamsView.as_view()),
    path('<int:id>/', TeamView.as_view())
]

