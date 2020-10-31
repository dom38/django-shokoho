from django.db import models


class Items(models.Model):
    name = models.CharField(max_length=200, blank=False, default='')
    mesh = models.CharField(max_length=200,blank=False, default='')
    item_category = models.CharField(max_length=200, blank=False, default='')
    AmmoOffset = models.CharField(max_length=200,blank=False, default='')
    Type = models.CharField(max_length=200, blank=False, default='')
    crafted_item = models.CharField(max_length=200,blank=False, default='')
    weight = models.CharField(max_length=200,default=False)
