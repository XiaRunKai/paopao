<<<<<<< HEAD
from django.http import JsonResponse
from django.shortcuts import render


def getorder(request):
    if request.method == "POST":
        order_get = request.POST
    else:
        return JsonResponse({"订单提交失败"})

        startplace = order_get.get("start")
        endplace = order_get.get("end")
        orderinformation = order_get.get("orderinformation")
        estimateddate = order_get.get("date")
        estimatedtime = order_get.get("time")
        price = order_get.get("price")
        ordername = order_get.get("ordername")
        phonenumber = order_get.get("phone")

        this_order = Order(StartPlace=startplace, EndPlace=endplace, OrderInformation=orderinformation,
                           EstimatedDate=estimateddate, EstimatedTime=estimatedtime, Price=price,
                           OrderName=ordername, Phonenumber=phonenumber, OrderStatus=orderstatus)
        this_order.save()
        return JsonResponse({"订单提交成功！"})
=======
from django.http import JsonResponse
from django.shortcuts import render


def getorder(request):
    if request.method == "POST":
        order_get = request.POST
    else:
        return JsonResponse({"订单提交失败"})

        startplace = order_get.get("")
        endplace = order_get.get("")
        orderinformation = order_get.get("")
        estimateddate = order_get.get("")
        estimatedtime = order_get.get("")
        price = order_get.get("")
        ordername = order_get.get("")
        phonenumber = order_get.get("")
        orderstatus = order_get.get("")

        this_order = Order(StartPlace=startplace, EndPlace=endplace, OrderInformation=orderinformation,
                           EstimatedDate=estimateddate, EstimatedTime=estimatedtime, Price=price,
                           OrderName=ordername, Phonenumber=phonenumber, OrderStatus=orderstatus)
        this_order.save()
        return JsonResponse({"订单提交成功！"})
>>>>>>> ba53574fd82e9a73fa640124da959bf8d437afd6
