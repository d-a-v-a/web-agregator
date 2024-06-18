from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Project
from .serializers import ProjectSerializer

@api_view(['GET'])
def list_projects(request):
    if request.method == 'GET':
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)

@api_view(['POST'])
def create_project(request):
    if request.method == 'POST':
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def view_project(request, pk):
    try:
        project = Project.objects.get(pk=pk)
    except Project.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        project.views += 1
        project.save()

        serializer = ProjectSerializer(project)
        return Response(serializer.data)

@api_view(['DELETE'])
def delete_project(request, pk):
    try:
        project = Project.objects.get(pk=pk)
    except Project.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        project.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['PUT'])
def update_project(request, pk):
    try:
        project = Project.objects.get(pk=pk)
    except Project.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = ProjectSerializer(project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def vote_project(request, pk):
    try:
        project = Project.objects.get(pk=pk)
    except Project.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'POST':
        # Получаем значение рейтинга из запроса
        rating = request.data.get('rating', None)

        if rating is not None:
            rating = int(rating)
            # Увеличиваем общее количество голосов и общий рейтинг
            project.total_votes += 1
            project.total_rating += rating
            # Рассчитываем новый рейтинг как среднее значение
            project.rating = project.total_rating / project.total_votes
            project.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Rating value is required'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def list_projects_by_category(request, category):
    if request.method == 'GET':
        projects = Project.objects.filter(categories=category)
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def get_path(request, pk):
    if request.method == 'GET':
        project = Project.objects.get(pk=pk)
        return Response(project.path)


#new
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])


#возвращать номер ошибки
def upload_main_image(request, pk):
    try:
        project = Project.objects.get(pk=pk)
        if request.method == 'POST' and request.FILES.get('main_image'):
            project.main_image = request.FILES['main_image']
            project.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Main image file is required'}, status=status.HTTP_400_BAD_REQUEST)
    except Project.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)


from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.http import HttpResponse
@api_view(['GET'])
def get_main_image(request, pk):
    project = get_object_or_404(Project, pk=pk)

    if project.main_image:
        try:
            image_data = open(project.main_image.path, "rb").read()
            return HttpResponse(image_data, content_type="image/jpeg")
        except FileNotFoundError:
            return Response({'error': 'Main image file not found'}, status=status.HTTP_404_NOT_FOUND)
    else:
        return Response({'error': 'Main image not found'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def update_webgl_project(request, pk):
    try:
        project = Project.objects.get(pk=pk)
    except Project.DoesNotExist:
        return Response({'error': 'Project not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'POST' and request.FILES.get('webgl_file'):
        webgl_file = request.FILES['webgl_file']
        project.webgl_file = webgl_file
        project.save()
        return Response({'success': 'WebGL project updated successfully'}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'WebGL project file is required'}, status=status.HTTP_400_BAD_REQUEST)


from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from rest_framework.decorators import api_view
from .models import Project

@api_view(['GET'])
def get_webgl_project(request, pk):
    try:
        project = Project.objects.get(pk=pk)
    except Project.DoesNotExist:
        return Response({'error': 'Project not found'}, status=status.HTTP_404_NOT_FOUND)

    # Путь к папке с webgl проектом
    webgl_project_path = os.path.join(settings.MEDIA_ROOT, 'webgl_projects')

    # Полный путь к index.html
    index_html_path = os.path.join(webgl_project_path, 'index.html')

    if not os.path.exists(index_html_path):
        return Response({'error': 'index.html not found in WebGL project'}, status=status.HTTP_404_NOT_FOUND)

    try:
        with open(index_html_path, 'rb') as file:
            return HttpResponse(file.read(), content_type='text/html')
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

from .models import Screenshot
@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def upload_screenshot(request, pk):
    try:
        project = Project.objects.get(pk=pk)
    except Project.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'POST' and request.FILES.get('screenshot'):
        screenshot = Screenshot.objects.create(image=request.FILES['screenshot'])
        project.screenshots.add(screenshot)
        return Response(status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Screenshot file is required'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_screenshots(request, pk):
    try:
        project = Project.objects.get(pk=pk)
    except Project.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    screenshots = project.screenshots.all()
    screenshot_urls = [request.build_absolute_uri(screenshot.image.url) for screenshot in screenshots]
    return Response({'screenshot_urls': screenshot_urls}, status=status.HTTP_200_OK)


# Тест
import os
import zipfile
from django.conf import settings
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def upload_webgl_project_test(request):
    try:
        project_id = request.data.get('project_id')
        zip_file = request.FILES.get('webgl_project_zip')

        if not zip_file:
            return Response({'error': 'WebGL project ZIP file is required'}, status=status.HTTP_400_BAD_REQUEST)

        # Create a directory to extract the files
        extract_path = os.path.join(settings.MEDIA_ROOT, 'webgl_projects', str(project_id))
        os.makedirs(extract_path, exist_ok=True)

        # Save the ZIP file
        zip_file_path = os.path.join(extract_path, zip_file.name)
        with open(zip_file_path, 'wb') as f:
            for chunk in zip_file.chunks():
                f.write(chunk)

        # Extract ZIP contents
        with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
            zip_ref.extractall(extract_path)

        # Clean up: remove the temporary ZIP file
        os.remove(zip_file_path)

        return Response({'success': 'WebGL project uploaded successfully'}, status=status.HTTP_200_OK)

    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



#Тест 2
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Project

@csrf_exempt
def upload_zip_to_project(request, pk):
    project = get_object_or_404(Project, pk=pk)

    if request.method == 'POST' and request.FILES.get('zip_file'):
        zip_file = request.FILES['zip_file']

        try:
            # Сохраняем zip архив на сервере в папку projects/
            filename = f"{project.title}.zip"  # Пример генерации имени файла
            file_path = os.path.join(settings.MEDIA_ROOT, 'projects', filename)
            with open(file_path, 'wb') as destination:
                for chunk in zip_file.chunks():
                    destination.write(chunk)

            # Разархивируем файл, если это zip архив
            if filename.endswith('.zip'):
                with zipfile.ZipFile(file_path, 'r') as zip_ref:
                    # Разархивируем файл в папку проекта
                    extract_path = os.path.join(settings.MEDIA_ROOT, 'projects', project.title)
                    zip_ref.extractall(extract_path)

                # Обновляем поле file и path в модели проекта
                #project.file = os.path.join('projects', project.title, 'index.html')
                project.file = os.path.join('projects', project.title).replace('\\', '/')
                project.path = os.path.join(settings.MEDIA_URL, 'projects', project.title, 'index.html').replace('\\', '/')
                project.save()

                return JsonResponse({'message': 'Zip archive uploaded and processed successfully.'}, status=200)
            else:
                # Если загруженный файл не является zip архивом
                return JsonResponse({'error': 'Uploaded file is not a valid zip archive.'}, status=400)

        except Exception as e:
            # Обработка ошибок
            print(f"Error: {str(e)}")
            return JsonResponse({'error': str(e)}, status=500)

    else:
        return JsonResponse({'error': 'POST request with zip_file parameter is required.'}, status=400)

from django.shortcuts import render, get_object_or_404
from .models import Project
from django.views.generic.base import View
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.conf import settings
import os

from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.conf import settings
import os

class ViewProject(View):
    def get(self, request, pk):
        project_id = Project.objects.get(pk=pk)
        project_title = Project.title
        # project_id.path = 'http://localhost:8000/get_project/' + project_id.path

        #file_zip = zipfile.ZipFile(project_id.file, 'r')
        #print(file_zip)
        # # file_zip.extractall(f'./media/projects/{file_zip.filename}')
        # file_zip.extractall(f'./blog/static/{file_zip.filename}')
        # # print(file_zip.namelist())
        # file_zip.close()

        # with zipfile.ZipFile(project_id.file, 'r') as file: #менеджер контекста
        #     # for item in file.infolist():
        #     #     print(f"File Name: {item.filename} Date: {item.date_time} Size: {item.file_size}")
        #
        #     file.extractall('./')
        url_zip = 'web-agregator/API/backend/media/projects/Test1'
        context = {'project': project_id,
                   'project_path': url_zip + '/index.html'}


        # print(project_id.file)
        return render(request, 'blog/project.html', context)
        # return render(request, f'./{project_id.file}/index.html', context)
        # return render(request, f'./media/projects/{file_zip.filename}/index.html')

def view_webgl_project(request, pk):
    # Путь к index.html проекта WebGL
    project_path = os.path.join(settings.MEDIA_ROOT, 'projects', 'Test1', 'index.html')

    try:
        # Открываем файл и читаем его содержимое
        with open(project_path, 'r', encoding='utf-8') as file:
            html_content = file.read()

        # Заменяем теги {% static %} на абсолютные URL статических файлов
        html_content = html_content.replace('{% static \'TemplateData/UnityProgress.js\' %}', settings.STATIC_URL + 'TemplateData/UnityProgress.js')
        html_content = html_content.replace('{% static \'Release/UnityLoader.js\' %}', settings.STATIC_URL + 'Release/UnityLoader.js')
        html_content = html_content.replace('{% static \'TemplateData/style.css\' %}', settings.STATIC_URL + 'TemplateData/style.css')
        html_content = html_content.replace('{% static \'TemplateData/fullscreen.png\' %}', settings.STATIC_URL + 'TemplateData/fullscreen.png')
        html_content = html_content.replace('{% static \'TemplateData/favicon.ico\' %}', settings.STATIC_URL + 'TemplateData/favicon.ico')

        # Возвращаем содержимое файла как HTTP-ответ
        return HttpResponse(html_content, content_type='text/html')
    except FileNotFoundError:
        return HttpResponse("Project not found", status=404)

def unity_webgl_page(request):
    return render(request, 'C:\Проект web-agregator (new)\web-agregator\Ao  i\backend\media\projects\Test1\index.html')
