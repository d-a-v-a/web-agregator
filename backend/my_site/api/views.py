from rest_framework.decorators import api_view
from rest_framework import generics

from my_site import settings
from .models import ProjectModel, MainPage, TestModel, Team
from .forms import TeamForm
from .serializers import ProjectSerializer, MainPageSerializer, TestProjectSerializer
from django.http import HttpResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
import os
from wsgiref.util import FileWrapper

#20/03/2024
from django.contrib import messages
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required

from django.shortcuts import get_object_or_404
from django.http import JsonResponse

def vote_project(request, pk):
    project = get_object_or_404(ProjectModel, pk=pk)
    project.vote()
    return JsonResponse({'votes': project.votes})

class LeadProjectCreate(generics.ListCreateAPIView):
    queryset = TestModel.objects.all()
    serializer_class = TestProjectSerializer

class WebHtmlDocumentView(View):
    def get(self, request, file_name):
        BASE_DIR  = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        file = FileWrapper(open(BASE_DIR+'/'+file_name, 'rb'))

        if os.path.exists(BASE_DIR):
            result = HttpResponse(file, content_type='text/html')
            result['Content-Disposition'] = f'inline; filename="{file_name}"'
            return result
        else:
            return HttpResponse("HTML документ не найден", status=404)
class MainPageListCreateView(generics.ListCreateAPIView):
    queryset = MainPage.objects.all()
    serializer_class = MainPageSerializer

class HTMLDocumentView(View):
    @csrf_exempt
    def get(self, request, doc_name):
        # Путь к HTML-документу в папке project_docs
        doc_path = os.path.join(settings.BASE_DIR, 'project_docs', doc_name)

        # Проверяем, существует ли файл
        if os.path.exists(doc_path):
            with open(doc_path, 'rb') as doc_file:
                response = HttpResponse(doc_file.read(), content_type='text/html')
                response['Content-Disposition'] = f'inline; filename="{doc_name}"'
                return response
        else:
            return HttpResponse("HTML документ не найден", status=404)


# новые
class MainPageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MainPage.objects.all()
    serializer_class = MainPageSerializer


@login_required
def create_team(request):
    if request.method == 'POST':
        form = TeamForm(request.POST)
        if form.is_valid():
            team = form.save(commit=False)
            team.leader = request.user  # Устанавливаем текущего пользователя как лидера команды
            team.save()
            form.save_m2m()  # Сохраняем связи со связанными объектами (члены команды)
            messages.success(request, 'Команда успешно создана!')
            return redirect('team_list')
    else:
        form = TeamForm()
    return render(request, 'create_team.html', {'form': form})

@login_required
def edit_team(request, team_id):
    team = Team.objects.get(id=team_id)
    if request.method == 'POST':
        form = TeamForm(request.POST, instance=team)
        if form.is_valid():
            form.save()
            messages.success(request, 'Изменения сохранены!')
            return redirect('team_list')
    else:
        form = TeamForm(instance=team)
    return render(request, 'edit_team.html', {'form': form})

@login_required
def delete_team(request, team_id):
    team = Team.objects.get(id=team_id)
    team.delete()
    messages.success(request, 'Команда успешно удалена!')
    return redirect('team_list')

@login_required
def team_list(request):
    teams = Team.objects.all()
    return render(request, 'team_list.html', {'teams': teams})
