from django.urls import path
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.permissions import AllowAny
from rest_framework import permissions


from .views import RegistrationView, LoginView, LogoutView, profile_view

from .views_project import *

schema_view = get_schema_view(
   openapi.Info(
      title="API Documentation",
      default_version='v1',
      description="API documentation for your project",
      terms_of_service="https://www.example.com/policies/terms/",
      contact=openapi.Contact(email="contact@example.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(AllowAny,),
)

number = 128

urlpatterns = [
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
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

