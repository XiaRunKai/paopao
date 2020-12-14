from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from trytest.models import User


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def login(request):
    if request.method == "GET":
        data_get = request.GET
    else:
        return JsonResponse({"msg": "登录失败"})

    studentnumber = data_get.get("studentnumber")
    password = data_get.get("password")
    this_user = User.objects.filter(StudentNumber=studentnumber).first()

    if this_user.Password == password:
        print("2233")
        return JsonResponse({"status": 1, "msg": "登录成功","studentnumber":studentnumber})
    else:
        return JsonResponse({"status": 0, "msg": "登录失败"})


def register(request):
    if request.method == "GET":
        data_get = request.GET
    else:
        return JsonResponse({"success": 0, "msg": "register failed"})

    phonenumber = data_get.get("phonenumber")
    studentnumber = data_get.get("studentnumber")
    password = data_get.get("password")

    this_user = User(Password=password, StudentNumber=studentnumber, PhoneNumber=phonenumber)

    if User.objects.filter(StudentNumber=studentnumber):
        return JsonResponse({"data": "注册失败，该学号已被注册"})
    elif User.objects.filter(PhoneNumber=phonenumber):
        return JsonResponse({"data": "注册失败，该电话已被注册"})
    else:
        this_user.save()
        return JsonResponse({"data": "注册成功"})
