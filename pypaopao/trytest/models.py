from django.db import models


class User(models.Model):
    UserName = models.CharField(max_length=10, null=True)
    Password = models.CharField(max_length=20)
    PhoneNumber = models.IntegerField()
    StudentNumber = models.IntegerField()

    class Meta:
        db_table = "user"
