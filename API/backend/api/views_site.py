from datetime import datetime, timedelta
from django.utils import timezone
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import SiteConfiguration

@api_view(['GET'])
def remaining_voting_time(request):
    try:
        site_config = SiteConfiguration.objects.first()
        if site_config:
            current_time = timezone.now()
            remaining_time = site_config.voting_deadline - current_time

            # Преобразование remaining_time в дни, часы и минуты
            days = remaining_time.days
            hours, remainder = divmod(remaining_time.seconds, 3600)
            minutes, _ = divmod(remainder, 60)

            return JsonResponse({
                'days': days,
                'hours': hours,
                'minutes': minutes
            })
        else:
            return Response({'error': 'Таймер голосования не найден'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def start_voting_timer(request):
    try:
        # Получаем текущее время
        current_time = timezone.now()

        # Устанавливаем срок голосования на неделю вперёд
        voting_deadline = current_time + timedelta(weeks=1)

        # Создаем или обновляем запись конфигурации сайта с новым сроком голосования
        site_config, created = SiteConfiguration.objects.get_or_create(pk=1) # Предполагается, что существует только одна конфигурация сайта
        site_config.voting_deadline = voting_deadline
        site_config.save()

        return JsonResponse({'success': 'Таймер голосования успешно запущен'}, status=status.HTTP_200_OK)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
