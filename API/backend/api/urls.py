from django.urls import path
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.permissions import AllowAny
from rest_framework import permissions

from .TestView import TestModelViewSet
from .TimerView import NumberReturn, CategoriesReturn, TestAPIView

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
    path('testmodel/', TestModelViewSet.as_view({'get': 'list', 'post': 'create'}), name='mymodels-list'),
    path('testmodel/<int:pk>/', TestModelViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='mymodels-detail'),
    path('timer/', NumberReturn.as_view()),
    path('categories/', CategoriesReturn.as_view()),
    path('test/', TestAPIView.as_view()),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]

