import xadmin
from get_order.models import Order


class OrderAdmin(object):
    list_display = ['StartPlace', 'EndPlace', 'OrderInformation', 'EstimatedDate', 'EstimatedTime', 'OrderDtae',
                    'OrderTime', 'Price', 'OrderName', 'X_PhoneNumber', 'X_StudentNumber', 'J_PhoneNumber',
                    'J_StudentNumber', 'OrderStatus']
    list_filter = ['StartPlace', 'EndPlace', 'OrderInformation', 'EstimatedDate', 'EstimatedTime', 'OrderDtae',
                   'OrderTime', 'Price', 'OrderName', 'X_PhoneNumber', 'X_StudentNumber', 'J_PhoneNumber',
                   'J_StudentNumber', 'OrderStatus']
    search_fields = ['StartPlace', 'EndPlace', 'OrderInformation', 'EstimatedDate', 'EstimatedTime', 'OrderDtae',
                     'OrderTime', 'Price', 'OrderName', 'X_PhoneNumber', 'X_StudentNumber', 'J_PhoneNumber',
                     'J_StudentNumber', 'OrderStatus']


xadmin.site.register(Order, OrderAdmin)
