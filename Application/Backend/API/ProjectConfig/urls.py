from django.conf.urls import url, include

urlpatterns = [
    url(r'^api/profile/', include('App_Profile.urls')),
    url(r'^api/account/', include('App_Account.urls')),
]
