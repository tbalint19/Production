from django.db import models
from App_Schedule.models import *


class Collection(models.Model):

    title = models.CharField(max_length=20)


class MatchEventOfMatchOfCollection(models.Model):

    collection_obj = models.ForeignKey(Collection, on_delete=models.CASCADE)
    match_event_of_match_obj = models.ForeignKey(MatchEventOfMatch, on_delete=models.CASCADE)


class TeamEventOfTeamOfMatchOfCollection(models.Model):

    collection_obj = models.ForeignKey(Collection, on_delete=models.CASCADE)
    team_event_of_team_of_match_obj = models.ForeignKey(TeamEventOfTeamOfMatch, on_delete=models.CASCADE)


class PlayerEventOfPlayerOfMatchOfCollection(models.Model):

    collection_obj = models.ForeignKey(Collection, on_delete=models.CASCADE)
    player_event_of_player_of_match_obj = models.ForeignKey(PlayerEventOfPlayerOfMatch, on_delete=models.CASCADE)


class RaceTicket(models.Model):

    collection_obj = models.ForeignKey(Collection, on_delete=models.CASCADE)
    amount = models.FloatField()
    is_professional = models.BooleanField(default=False)
