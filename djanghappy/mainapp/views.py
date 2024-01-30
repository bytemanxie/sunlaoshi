from django.shortcuts import render

# Create your views here.
def mainpage(request):
    return render(request, 'mainpage/home-master/index.html')

def lunbo(request):
    return render(request, 'mainpage/swiper4-code/index.html')

def holiday(request):
    return render(request, f'mainpage\home-master\HolidayCountdown-master\src\index.html')