from django.conf.urls import url
from . import views


urlpatterns = [

    url(r'^checkusername$', views.check_username, name='check_username'),
    url(r'^checkemail$', views.check_email, name='check_email'),
    url(r'^checkinviter$', views.check_inviter, name='check_inviter'),

    url(r'^signup$', views.signup_user, name='signup_user'),
    url(r'^login$', views.login_user, name='login_user'),

    url(r'^confirm$', views.confirm_profile, name='confirm_user'),

    url(r'^user$', views.get_user, name='get_user'),

]
