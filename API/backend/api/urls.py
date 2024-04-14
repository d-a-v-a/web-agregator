from django.urls import path

from .views import RegistrationView, LoginView, LogoutView, profile_view

from .views_project import *

number = 128

urlpatterns = [
    path('register/', RegistrationView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('profile/', profile_view, name='profile'),
    path('projects/', list_projects),
    path('projects/register/', create_project),
    path('projects/<int:pk>/', view_project),
    path('projects/<int:pk>/delete/', delete_project),
    path('projects/<int:pk>/update/', update_project),
    path('projects/<int:pk>/vote/', vote_project),
]

