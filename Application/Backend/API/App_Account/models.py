from django.db import models
from django.contrib.auth.models import User
from App_Community.models import Organization
from App_RaceGame.models import UserTicket
from App_Championship.models import Racer

class Account(models.Model):

    user_obj = models.ForeignKey(User, on_delete=models.CASCADE)
    game_money_balance = models.FloatField()
    balance = models.FloatField()


class Withdraw(models.Model):

    account_obj = models.ForeignKey(Account, on_delete=models.CASCADE)
    amount = models.FloatField()
    comment = models.CharField(max_length=150)


class Deposit(models.Model):

    account_obj = models.ForeignKey(Account, on_delete=models.CASCADE)
    amount = models.FloatField()
    comment = models.CharField(max_length=150)


class Donation(models.Model):

    account_obj = models.ForeignKey(Account, on_delete=models.CASCADE)
    organization_obj = models.ForeignKey(Organization, on_delete=models.CASCADE)
    amount = models.FloatField()


class TicketPurchase(models.Model):

    account_obj = models.ForeignKey(Account, on_delete=models.CASCADE)
    user_ticket_obj = models.ForeignKey(UserTicket)
    amount = models.FloatField()


class RacePayout(models.Model):

    account_obj = models.ForeignKey(Account, on_delete=models.CASCADE)
    user_ticket_obj = models.ForeignKey(UserTicket)
    amount = models.FloatField()


class ChampionshipEntryFee(models.Model):

    account_obj = models.ForeignKey(Account, on_delete=models.CASCADE)
    racer_obj = models.ForeignKey(Racer, on_delete=models.CASCADE)
    amount = models.FloatField()


class ChampionshipReward(models.Model):

    account_obj = models.ForeignKey(Account, on_delete=models.CASCADE)
    racer_obj = models.ForeignKey(Racer, on_delete=models.CASCADE)
    amount = models.FloatField()
