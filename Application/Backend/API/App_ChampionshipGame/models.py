from django.contrib.auth.models import User
from django.db import models
from App_Schedule.models import *
from App_Championship.models import *


class GPTicket(models.Model):

    grand_prix_obj = models.ForeignKey(GrandPrix, on_delete=models.CASCADE)
    user_obj = models.ForeignKey(User, on_delete=models.CASCADE)
    points = models.IntegerField()


class BetOfGPTicketOnMatchEventOfMatch(models.Model):

    gpticket_obj = models.ForeignKey(GPTicket, on_delete=models.CASCADE)
    match_event_of_match_obj = models.ForeignKey(MatchEventOfMatch, on_delete=models.CASCADE)
    home_bet = models.IntegerField(null=True, default=None)
    draw_bet = models.IntegerField(null=True, default=None)
    away_bet = models.IntegerField(null=True, default=None)
    result_points = models.IntegerField(null=True, default=None)


class BetOfGPTicketOnTeamEventOfTeamOfMatch(models.Model):

    gpticket_obj = models.ForeignKey(GPTicket, on_delete=models.CASCADE)
    team_event_of_team_of_match_obj = models.ForeignKey(TeamEventOfTeamOfMatch, on_delete=models.CASCADE)
    home_bet = models.IntegerField(null=True, default=None)
    draw_bet = models.IntegerField(null=True, default=None)
    away_bet = models.IntegerField(null=True, default=None)
    result_points = models.IntegerField(null=True, default=None)


class BetOfGPTicketOnPlayerEventOfPlayerOfMatch(models.Model):

    gpticket_obj = models.ForeignKey(GPTicket, on_delete=models.CASCADE)
    player_event_of_player_of_match_obj = models.ForeignKey(PlayerEventOfPlayerOfMatch, on_delete=models.CASCADE)
    home_bet = models.IntegerField(null=True, default=None)
    draw_bet = models.IntegerField(null=True, default=None)
    away_bet = models.IntegerField(null=True, default=None)
    result_points = models.IntegerField(null=True, default=None)
