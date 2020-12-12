import xadmin
from get_order.models import Order


class OrderAdmin(object):
    list_display = ['StartPlace', 'EndPlace', 'OrderInformation', 'EstimatedDate', 'EstimatedTime', 'OrderDtae',
                    'OrderTime', 'Price', 'OrderName', 'PhoneNumber', 'OrderStatus']
    list_filter = ['StartPlace', 'EndPlace', 'OrderInformation', 'EstimatedDate', 'EstimatedTime', 'OrderDtae',
                   'OrderTime', 'Price', 'OrderName', 'PhoneNumber', 'OrderStatus']
    search_fields = ['StartPlace', 'EndPlace', 'OrderInformation', 'EstimatedDate', 'EstimatedTime', 'OrderDtae',
                     'OrderTime', 'Price', 'OrderName', 'PhoneNumber', 'OrderStatus']


xadmin.site.register(Order, OrderAdmin)
