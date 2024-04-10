from rest_framework import serializers
from .models import TestModel, TimerModel

class TestModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestModel
        fields = '__all__'

class TimerModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimerModel
        fields = '__all__'
