# Generated by Django 3.1.1 on 2020-12-01 06:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trytest', '0004_auto_20201201_1406'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='Password',
            field=models.CharField(max_length=20, verbose_name='密码'),
        ),
        migrations.AlterField(
            model_name='user',
            name='PhoneNumber',
            field=models.CharField(max_length=20, verbose_name='电话号码'),
        ),
        migrations.AlterField(
            model_name='user',
            name='StudentNumber',
            field=models.CharField(max_length=20, verbose_name='学号'),
        ),
    ]