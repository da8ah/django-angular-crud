# from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.


def create_user(self):
    return JsonResponse({'msg': 'created'})
