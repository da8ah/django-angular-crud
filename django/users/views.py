# from django.shortcuts import render
from django.http import JsonResponse
from urllib.parse import unquote
import json
from .models import User

# Create your views here.


def body_parser(body):
    data = body
    data = str(data, encoding='utf-8')
    data = unquote(data)
    if data.rindex(',') >= len(data)-3:
        data = data[:data.rindex(',')] + data[data.rindex(',')+1:]
    return json.loads(data)


def create_user(request):
    try:
        if request.method == "POST":
            data = body_parser(request.body)
            User.objects.create(**data)

            return JsonResponse({'msg': 'created'})
        else:
            return JsonResponse({'msg': 'wrong method'})

    except:
        return JsonResponse({'msg': 'wrong input'})


def read_users(request):
    if request.method == "GET":
        return JsonResponse(list(User.objects.values()), safe=False)
    else:
        return JsonResponse({'msg': 'wrong method'})


def update_user(request, user_id):
    if request.method == "PUT":
        data = body_parser(request.body)
        User.objects.filter(id=user_id).update(**data)
        return JsonResponse({'msg': 'update'})
    else:
        return JsonResponse({'msg': 'wrong method'})


def delete_user(request, user_id):
    if request.method == "DELETE":
        User.objects.filter(id=user_id).delete()
        return JsonResponse({'msg': 'delete'})
    else:
        return JsonResponse({'msg': 'wrong method'})
