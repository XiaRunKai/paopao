from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from trytest.models import User


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def login(request):
    if request.method == "POST":
        data_get = request.POST
    else:
        return JsonResponse({"msg": "登录失败"})

    studentnumber = data_get.get("studentnumber")
    password = data_get.get("password")
    try:
        this_user = User.objects.get(StudentNumber=studentnumber)
    except:
        return JsonResponse({"status": -1, "msg": "user doesn't exist"})
    if this_user.Password == password:
        print("2233")
        return JsonResponse({"status": 1, "msg": "登录成功"})
    else:
        return JsonResponse({"status": 0, "msg": "登录失败"})


def register(request):
    if request.method == "POST":
        data_get = request.POST
    else:
        return JsonResponse({"success": 0, "msg": "register failed"})

    phonenumber = data_get.get("phonenumber")
    studentnumber = data_get.get("studentnumber")
    password = data_get.get("password")

    this_user = User(Password=password, StudentNumber=studentnumber, PhoneNumber=phonenumber)
    try:
        User.objects.get(StudentNumber=studentnumber)
        return JsonResponse({"data": "注册失败，该学号已被注册"})
    except:
        try:
            User.objects.get(PhoneNumber=phonenumber)
            return JsonResponse({"data": "注册失败，该电话已被注册"})
        except:
            this_user.save()
            return JsonResponse({"data": "注册成功"})
