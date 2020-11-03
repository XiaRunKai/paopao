from django.db import models


class Order(models.Model):
    StartPlace = models.CharField(max_length=100)
    EndPlace = models.CharField(max_length=100)
    OrderInformation = models.CharField(max_length=100)
    EstimatedDate = models.DateField()
    EstimatedTime = models.TimeField()
    Price = models.FloatField()
    OrderName = models.CharField(max_length=20)
    PhoneNumber = models.CharField(max_length=11)
    OrderStatus = models.IntegerField(default=0)

    class Meta:
        db_table = "order"
