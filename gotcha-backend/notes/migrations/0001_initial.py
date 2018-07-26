# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-07-25 10:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='', max_length=256)),
                ('color', models.CharField(default='', max_length=256)),
            ],
            options={
                'verbose_name': 'Note',
            },
        ),
    ]
