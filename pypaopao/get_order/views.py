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
