# Generated by Django 2.2.5 on 2020-10-30 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Items',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=200)),
                ('mesh', models.CharField(default='', max_length=200)),
                ('item_category', models.CharField(default='', max_length=200)),
                ('AmmoOffset', models.CharField(default='', max_length=200)),
                ('Type', models.CharField(default='', max_length=200)),
                ('crafted_item', models.CharField(default='', max_length=200)),
                ('weight', models.CharField(default=False, max_length=200)),
            ],
        ),
    ]