from django.db import models


class User(models.Model):
    StudentNumber = models.CharField(max_length=20)
    Password = models.CharField(max_length=20)
    PhoneNumber = models.CharField(max_length=20)

    class Meta:
        db_table = "user"
