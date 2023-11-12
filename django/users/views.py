# from django.shortcuts import render
from django.http import JsonResponse
from urllib.parse import unquote
import json

# Create your views here.


def create_user(request):
    # try:
    if request.method == "POST":
        data = request.body
        data = str(data, encoding='utf-8')
        data = unquote(data)
        if data.rindex(',') <= len(data)-3:
            data = data[:data.rindex(',')] + data[data.rindex(',')+1:]
        data = json.loads(data)
        print(data)

    return JsonResponse({'msg': 'created'})
    # except:
    #     return JsonResponse({'msg': 'wrong input'})


def read_user(request):
    if request.method == "GET":
        print(request.method)
    return JsonResponse({'msg': 'read'})


def update_user(request):
    if request.method == "UPDATE":
        print(request.method)
    return JsonResponse({'msg': 'update'})


def delete_user(request):
    if request.method == "DELETE":
        print(request.method)
    return JsonResponse({'msg': 'delete'})
