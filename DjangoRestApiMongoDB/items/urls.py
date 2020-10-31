from django.conf.urls import url 
from items import views 
 
urlpatterns = [ 
    url(r'^api/items$', views.items_list),
    url(r'^api/items/(?P<pk>[0-9]+)$', views.items_detail),
]
