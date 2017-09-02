from django.conf.urls import url
from . import views


urlpatterns = [

    url(r'^check_username$', views.check_username, name='check_username'),
    url(r'^check_email$', views.check_email, name='check_email'),

    url(r'^signup$', views.signup_user, name='signup_user'),
    url(r'^login$', views.login_user, name='login_user'),

    url(r'^confirm$', views.confirm_profile, name='confirm_user'),

]
