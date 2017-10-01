from django.db import models
import datetime
from django.contrib.auth.models import User
from App_RaceGame.models import UserTicket
from App_Championship.models import Championship
from App_ChampionshipGame.models import GPTicket


class Friendship(models.Model):

    user_obj = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_obj")
    friend_obj = models.ForeignKey(User, on_delete=models.CASCADE, related_name="friend_obj")
    is_confirmed = models.BooleanField(default=False)
    is_requester = models.BooleanField()


class Organization(models.Model):

    name = models.CharField(max_length=50)
    description = models.CharField(max_length=150)


class DonationPreference(models.Model):

    user_obj = models.ForeignKey(User, on_delete=models.CASCADE)
    organization_obj = models.ForeignKey(Organization, on_delete=models.CASCADE, related_name="supported_organizations")
    percent = models.IntegerField()


class Donation(models.Model):

    user_obj = models.ForeignKey(User, on_delete=models.CASCADE)
    organization_obj = models.ForeignKey(Organization, on_delete=models.CASCADE)
    amount = models.FloatField()


class DefaultTweet(models.Model):

    user_obj = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=150)
    created = models.DateTimeField(default=datetime.datetime.now)


class TicketTweet(models.Model):

    race_ticket_obj = models.ForeignKey(UserTicket, on_delete=models.CASCADE)
    user_obj = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=150)
    created = models.DateTimeField(default=datetime.datetime.now)


class GPTicketTweet(models.Model):

    gp_ticket_obj = models.ForeignKey(GPTicket)
    user_obj = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=150)
    created = models.DateTimeField(default=datetime.datetime.now)


class ChampionshipTweet(models.Model):

    championship_obj = models.ForeignKey(Championship)
    user_obj = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=150)
    created = models.DateTimeField(default=datetime.datetime.now)
