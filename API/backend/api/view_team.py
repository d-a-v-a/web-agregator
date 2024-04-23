from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .models import Team
from .serializers import TeamSerializer


class TeamsView(GenericAPIView):
    serializer_class = TeamSerializer

    def get(self, request):
        teams = Team.objects.all()
        serializer = self.serializer_class(teams, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        Team.objects.all().delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class TeamView(GenericAPIView):
    serializer_class = TeamSerializer

    def get(self, request, id):
        try:
            team = Team.objects.get(id=id)
        except Team.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = self.serializer_class(team)
        return Response(serializer.data)

    def put(self, request, id):
        try:
            team = Team.objects.get(id=id)
        except Team.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = self.serializer_class(team, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        try:
            team = Team.objects.get(id=id)
        except Team.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        team.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def post(self, request, id, username):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



