# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-11-28 12:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('duration', models.CharField(max_length=20)),
                ('avatar', models.ImageField(upload_to='media')),
            ],
        ),
    ]
