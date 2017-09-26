from django.db import models
from App_Schedule.models import *
from django.contrib.auth.models import User


class League(models.Model):

    name = models.CharField(max_length=30)
    is_private = models.BooleanField(default=False)


class Championship(models.Model):

    league_obj = models.ForeignKey(League, on_delete=models.CASCADE)
    season = models.IntegerField()


class Racer(models.Model):

    user_obj = models.ForeignKey(User, on_delete=models.CASCADE)
    league_obj = models.ForeignKey(League, on_delete=models.CASCADE)


class GrandPrix(models.Model):

    championship_obj = models.ForeignKey(Championship, on_delete=models.CASCADE)
    round = models.IntegerField()


class MatchEventOfMatchOfGrandPrix(models.Model):

    match_event_of_match_of_grand_prix_obj = models.ForeignKey(MatchEventOfMatch, on_delete=models.CASCADE)
    grand_prix_obj = models.ForeignKey(GrandPrix, on_delete=models.CASCADE)


class TeamEventOfTeamOfMatchOfGrandPrix(models.Model):

    team_event_of_team_of_match_of_grand_prix_obj = models.ForeignKey(TeamEventOfTeamOfMatch, on_delete=models.CASCADE)
    grand_prix_obj = models.ForeignKey(GrandPrix, on_delete=models.CASCADE)


class PlayerEventOfPlayerOfMatchOfGrandPrix(models.Model):

    player_event_of_player_of_match_of_grand_prix_obj = models.ForeignKey(PlayerEventOfPlayerOfMatch, on_delete=models.CASCADE)
    grand_prix_obj = models.ForeignKey(GrandPrix, on_delete=models.CASCADE)
