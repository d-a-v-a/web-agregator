from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import TimerModel
from .serializers import TimerModelSerializer

import datetime

class NumberReturn(APIView):
    def get(self, request):
        now = datetime.datetime.now()
        current_time = now.strftime("%H:%M:%S")
        return Response(current_time)

test_massive = []
class TestAPIView(APIView):
    def get(self, request):
        return Response(test_massive)

    def post(self, request):
        data = request.data  # Получаем данные из запроса
        item = data.get('item')

        if item:
            test_massive.append(item)
        return Response({"message": "Данные добавлены в список"})



# def get(self, request):
#         number = request.query_params.get('number')  # Получаем число из параметров запроса
#         if number == '1':
#             response_data = {"message": "Информация для числа 1"}
#         else:
#             response_data = {"message": "Информация для числа, отличного от 1"}
#         return Response(response_data)

categories = ['arcade', 'shooter']
categories[0]

class CategoriesReturn(APIView):
    def get(self, request):
        return Response(categories[0])
