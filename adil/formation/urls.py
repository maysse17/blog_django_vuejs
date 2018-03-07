"""formation URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import os
from django.contrib import admin
from django.urls import path
from django.urls import re_path
from django.urls import include
from django.conf import settings
from adil.base import views
from django_js_reverse.views import urls_js
from django.views.decorators.cache import cache_page


urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', include(('adil.base.urls', 'base'), namespace='base')),
    path('accounts/', include(('adil.accounts.urls', 'accounts'), namespace='accounts')),
    path('board/', include(('adil.board.urls', 'board'), namespace='board')),
    re_path(r'^jsreverse/$', cache_page(3600)(urls_js), name='js_reverse'),
]

handler403 = views.handler403
handler404 = views.handler404
handler500 = views.handler500

if settings.DEBUG:
    import debug_toolbar

    urlpatterns += [
        path('500/', views.handler500),
        path('404/', views.handler404),
        path('403/', views.handler403),
        path(r'^__debug__/', include(debug_toolbar.urls)),
    ]

