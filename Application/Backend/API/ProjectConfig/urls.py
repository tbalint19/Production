from django.conf.urls import url, include

urlpatterns = [
    url(r'^api/profile/', include('App_Profile.urls')),
    url(r'^api/account/', include('App_Account.urls')),
    url(r'^api/schedule/', include('App_Schedule.urls')),
    url(r'^api/race/', include('App_Race.urls')),
    url(r'^api/racegame/', include('App_RaceGame.urls')),
    url(r'^api/chamionship/', include('App_Championship.urls')),
    url(r'^api/chamionshipgame/', include('App_ChampionshipGame.urls')),
    url(r'^api/wall/', include('App_ChampionshipGame.urls')),
    url(r'^api/community/', include('App_Community.urls')),
]
