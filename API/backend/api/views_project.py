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
