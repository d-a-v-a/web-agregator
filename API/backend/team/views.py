from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Team
from .serializers import TeamSerializer


class TeamsView(APIView):
    def get(self, request):
        teams = Team.objects.all()
        serializer = TeamSerializer(teams, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TeamSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TeamView(APIView):
    def get(self, request, id):
        try:
            team = Team.objects.get(id=id)
        except Team.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = TeamSerializer(team)
        return Response(serializer.data)

    def delete(self, request, id):
        try:
            team = Team.objects.get(id=id)
        except Team.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        team.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

