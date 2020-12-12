from django.db import models


class User(models.Model):
    StudentNumber = models.CharField(max_length=20, verbose_name='学号')
    Password = models.CharField(max_length=20, verbose_name='密码')
    PhoneNumber = models.CharField(max_length=20, verbose_name='电话号码')

    class Meta:
        db_table = "user"
        verbose_name = '用户'
        verbose_name_plural = verbose_name
