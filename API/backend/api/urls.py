from django.urls import path

from .view_team import TeamsView, TeamView
from .views import RegistrationView, LoginView, LogoutView, profile_view

from .views_project import *
from .views_site import *

number = 128

# для работы со статическими данными
from django.conf.urls.static import static
from django.conf import settings

from django.views.generic import RedirectView
from django.views.generic import TemplateView

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
    path('projects/categories=<str:category>/', list_projects_by_category),
    path('projects/timer/', remaining_voting_time),
    path('projects/start_timer/', start_voting_timer),
    #path('projects/<int:pk>/upload_screenshot/', upload_screenshot),
    #path('projects/<int:pk>/get_screenshots/', get_screenshots),
    path('teams/', TeamsView.as_view()),
    path('teams/<int:id>/', TeamView.as_view()),
    path('projects/<int:pk>/upload_main_image/', upload_main_image, name='upload_main_image'),
    path('projects/<int:pk>/main_image/', get_main_image, name='get_main_image'),
    path('media/projects_images/<path:image_path>/', RedirectView.as_view(url=settings.MEDIA_URL)),
    path('projects/<int:pk>/update_webgl/', upload_zip_to_project, name='upload_zip'),
    path('projects/<int:pk>/get_path/', get_path, name='get_path'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
