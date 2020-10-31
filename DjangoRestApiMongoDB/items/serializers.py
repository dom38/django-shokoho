from rest_framework import serializers 
from items.models import Items

class ItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = ('id', 'name', 'mesh', 'item_category', 'AmmoOffset', 'Type', 'crafted_item', 'weight')
