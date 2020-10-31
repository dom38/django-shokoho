from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from items.models import Items
from items.serializers import ItemsSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def items_list(request):
    
    if request.method == 'GET':
        items = Items.objects.all()
        
        name = request.GET.get('name', None)
        if name is not None:
            items = items.filter(name__icontains=name)
        
        items_serializer = ItemsSerializer(items, many=True)
        return JsonResponse(items_serializer.data, safe=False)

    elif request.method == 'POST':
        items_data = JSONParser().parse(request)
        items_serializer = ItemsSerializer(data=items_data)
        if items_serializer.is_valid():
            items_serializer.save()
            return JsonResponse(items_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(items_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        count = Items.objects.all().delete()
        return JsonResponse({'message': '{} Items were deleted successfully!'.format(count[0])}, status=status.HTTP_204_NO_CONTENT)
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def items_detail(request, pk):
    
    try: 
        items = items.objects.get(pk=pk) 
    except items.DoesNotExist: 
        return JsonResponse({'message': 'The item does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET': 
        items_serializer = ItemsSerializer(items) 
        return JsonResponse(items_serializer.data)

    elif request.method == 'PUT': 
        items_data = JSONParser().parse(request) 
        items_serializer = ItemsSerializer(items, data=items_data) 
        if items_serializer.is_valid(): 
            items_serializer.save() 
            return JsonResponse(items_serializer.data) 
        return JsonResponse(items_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE': 
        item.delete() 
        return JsonResponse({'message': 'Item was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
