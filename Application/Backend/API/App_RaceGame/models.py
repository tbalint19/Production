from django.contrib.auth.models import User
from django.db import models
from App_Schedule.models import *
from App_Race.models import *


class UserTicket(models.Model):

    user_obj = models.ForeignKey(User, on_delete=models.CASCADE)
    race_ticket_obj = models.ForeignKey(RaceTicket, on_delete=models.CASCADE)
    points = models.IntegerField()
    payout = models.FloatField()


class BetOfUserTicketOnMatchEventOfMatch(models.Model):

    user_ticket_obj = models.ForeignKey(UserTicket, on_delete=models.CASCADE)
    match_event_of_match_obj = models.ForeignKey(MatchEventOfMatch, on_delete=models.CASCADE)
    home_bet = models.IntegerField(null=True, default=None)
    draw_bet = models.IntegerField(null=True, default=None)
    away_bet = models.IntegerField(null=True, default=None)
    result_points = models.IntegerField(null=True, default=None)


class BetOfUserTicketOnTeamEventOfTeamOfMatch(models.Model):

    user_ticket_obj = models.ForeignKey(UserTicket, on_delete=models.CASCADE)
    team_event_of_team_of_match_obj = models.ForeignKey(TeamEventOfTeamOfMatch, on_delete=models.CASCADE)
    home_bet = models.IntegerField(null=True, default=None)
    draw_bet = models.IntegerField(null=True, default=None)
    away_bet = models.IntegerField(null=True, default=None)
    result_points = models.IntegerField(null=True, default=None)


class BetOfUserTicketOnPlayerEventOfPlayerOfTeamOfMatch(models.Model):

    user_ticket_obj = models.ForeignKey(UserTicket, on_delete=models.CASCADE)
    player_event_of_player_of_match_obj = models.ForeignKey(PlayerEventOfPlayerOfMatch, on_delete=models.CASCADE)
    home_bet = models.IntegerField(null=True, default=None)
    draw_bet = models.IntegerField(null=True, default=None)
    away_bet = models.IntegerField(null=True, default=None)
    result_points = models.IntegerField(null=True, default=None)
