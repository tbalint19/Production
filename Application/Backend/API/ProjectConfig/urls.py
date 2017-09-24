from django.conf.urls import url, include

urlpatterns = [
    url(r'^api/profile/', include('App_Profile.urls')),
    url(r'^api/account/', include('App_Account.urls')),
    url(r'^api/schedule/', include('App_Schedule.urls')),
    url(r'^api/race/', include('App_Race.urls')),
]
