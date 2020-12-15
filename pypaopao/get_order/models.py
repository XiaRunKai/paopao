from django.db import models


class Order(models.Model):
    StartPlace = models.CharField(max_length=100, verbose_name='起始地点')
    EndPlace = models.CharField(max_length=100, verbose_name='目的地点')
    X_StudentNumber = models.CharField(max_length=13, verbose_name='下单者学号')
    J_StudentNumber = models.CharField(max_length=13, default='null', verbose_name='接单者学号')
    EstimatedDate = models.DateField(verbose_name='期望日期')
    EstimatedTime = models.TimeField(verbose_name='期望时间')
    OrderDate = models.DateField(auto_now_add=True, verbose_name='下单日期')
    OrderTime = models.TimeField(auto_now_add=True, verbose_name='下单时间')
    Price = models.FloatField(verbose_name='价格')
    OrderName = models.CharField(max_length=20, verbose_name='订单名称')
    OrderInformation = models.CharField(max_length=100, verbose_name='订单信息')
    X_PhoneNumber = models.CharField(max_length=11, verbose_name='下单者电话号码')
    J_PhoneNumber = models.CharField(max_length=11, default='null', verbose_name='接单者电话号码')
    OrderStatus = models.CharField(max_length=6, default='未接受', verbose_name='订单状态')

    class Meta:
        db_table = "order"
        verbose_name = '订单'
        verbose_name_plural = verbose_name
