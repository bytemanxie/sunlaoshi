from django.shortcuts import render

# Create your views here.
def display(request):
    return render(request, 'birthday/happy.html')

def show_cake(request):
    return render(request, 'birthday/cake.html')

def wechat2023(request):
    return render(request, 'birthday/wechat2023.html')