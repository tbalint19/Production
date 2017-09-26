from django.db import models
import datetime
from App_Profile.models import Profile
from App_RaceGame.models import UserTicket
from App_Championship.models import Championship
from App_ChampionshipGame.models import GPTicket


class Friendship(models.Model):

    profile_obj = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="profile_obj")
    friend_obj = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="friend_obj")
    is_confirmed = models.BooleanField(default=False)
    is_requester = models.BooleanField()


class DefaultTweet(models.Model):

    profile_obj = models.ForeignKey(Profile, on_delete=models.CASCADE)
    text = models.CharField(max_length=150)
    created = models.DateTimeField(default=datetime.datetime.now)


class TicketTweet(models.Model):

    race_ticket_obj = models.ForeignKey(UserTicket, on_delete=models.CASCADE)
    profile_obj = models.ForeignKey(Profile, on_delete=models.CASCADE)
    text = models.CharField(max_length=150)
    created = models.DateTimeField(default=datetime.datetime.now)


class GPTicketTweet(models.Model):

    gp_ticket_obj = models.ForeignKey(GPTicket)
    profile_obj = models.ForeignKey(Profile, on_delete=models.CASCADE)
    text = models.CharField(max_length=150)
    created = models.DateTimeField(default=datetime.datetime.now)


class ChampionshipTweet(models.Model):

    championship_obj = models.ForeignKey(Championship)
    profile_obj = models.ForeignKey(Profile, on_delete=models.CASCADE)
    text = models.CharField(max_length=150)
    created = models.DateTimeField(default=datetime.datetime.now)
