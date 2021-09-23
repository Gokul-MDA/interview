# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class User(models.Model):
    name=models.CharField(null=True,max_length=100)
    user_name=models.CharField(null=True,max_length=100)
    email=models.CharField(null=True,max_length=100)
    mobile=models.CharField(null=True,max_length=10)
    password=models.CharField(null=True,max_length=100)
    confirm_password=models.CharField(null=True, max_length=100)
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
