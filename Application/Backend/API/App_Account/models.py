from django.db import models
from django.contrib.auth.models import User

class Account(models.Model):

    user_obj = models.ForeignKey(User, on_delete=models.CASCADE)
    game_money_balance = models.FloatField()
    balance = models.FloatField()


class Withdraw(models.Model):

    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    amount = models.FloatField()
    comment = models.CharField(max_length=150)


class Deposit(models.Model):

    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    amount = models.FloatField()
    comment = models.CharField(max_length=150)
