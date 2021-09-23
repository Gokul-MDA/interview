# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2021-09-23 09:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=200)),
                ('email', models.CharField(max_length=100)),
                ('contact', models.CharField(max_length=20)),
                ('address', models.TextField()),
            ],
        ),
    ]