import json

from django.http import JsonResponse
from django.shortcuts import render

from get_order.models import Order


def getorder(request):
    if request.method == "GET":
        order_get = request.GET

        startplace = order_get.get("start")
        endplace = order_get.get("end")
        orderinformation = order_get.get("orderinformation")
        estimateddate = order_get.get("date")
        estimatedtime = order_get.get("time")
        price = order_get.get("price")
        ordername = order_get.get("ordername")
        x_phonenumber = order_get.get("phone")
        x_studentnumber = order_get.get("studentnumber")

        this_order = Order(StartPlace=startplace, EndPlace=endplace, OrderInformation=orderinformation,
                           EstimatedDate=estimateddate, EstimatedTime=estimatedtime, Price=price,
                           OrderName=ordername, X_PhoneNumber=x_phonenumber, X_StudentNumber=x_studentnumber)
        this_order.save()

        return JsonResponse({"data": [{"id": id, "startplace": startplace, "endplace": endplace,
                                       "orderinformation": orderinformation, "ordername": ordername,
                                       "estimateddate": estimateddate, "estimatedtime": estimatedtime,
                                       "price": price, "phonenumber": x_phonenumber}], "msg": "成功"})

    else:
        return JsonResponse({"msg": "订单提交失败"})


def allorder(request):
    orders = Order.objects.values()
    ord = list(orders)
    return JsonResponse(ord, safe=False)


def my_x_order(request):
    if request.method == "GET":
        order_get = request.GET

        studentnumber = order_get.get("studentnumber")
        my_x_orders = Order.objects.filter(X_StudentNumber=studentnumber).values()
        my_x_order = list(my_x_orders)
        return JsonResponse(my_x_order, safe=False)