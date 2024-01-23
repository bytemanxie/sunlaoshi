from django.contrib import admin
from django.urls import path
from birthday.views import display, show_cake, wechat2023

urlpatterns = [
    path('', display),
    path('cake/', show_cake),
    path('2023/', wechat2023),
]