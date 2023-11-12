from django.db import models

# Create your models here.


class User(models.Model):
    user = models.CharField(max_length=16)
    name = models.CharField(max_length=45)
    email = models.CharField(max_length=200)
    mobile = models.CharField(max_length=20)
