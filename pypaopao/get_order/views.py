
import json

from django.http import JsonResponse
from django.shortcuts import render

from get_order.models import Order


def getorder(request):
    if request.method == "POST":
        order_get = request.POST

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
                           OrderName=ordername, PhoneNumber=phonenumber)
        this_order.save()

        return JsonResponse({"data": [{"startplace": startplace, "endplace": endplace,
                                      "orderinformation": orderinformation, "ordername": ordername,
                                      "estimateddate": estimateddate, "estimatedtime": estimatedtime,
                                      "price": price, "phonenumber": phonenumber}]})
    else:
        return JsonResponse({"msg": "订单提交失败"})
