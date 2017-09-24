from django.db import models


class League(models.Model):

    name = models.CharField(max_length=50)


class Season(models.Model):

    name = models.CharField(max_length=20)


class SeasonOfLeague(models.Model):

    league_obj = models.ForeignKey(League, on_delete=models.CASCADE)
    season_obj = models.ForeignKey(Season, on_delete=models.CASCADE)


class Stadium(models.Model):

    name = models.CharField(max_length=50)


class Team(models.Model):

    name = models.CharField(max_length=30)
    short_name = models.CharField(max_length=10)
    stadium_obj = models.ForeignKey(Stadium, null=True, default=None)
    is_national_team = models.BooleanField(default=False)


class Player(models.Model):

    name = models.CharField(max_length=30)


class TeamMember(models.Model):

    player_obj = models.ForeignKey(Player, on_delete=models.CASCADE)
    team_obj = models.ForeignKey(Team, on_delete=models.CASCADE)


class Match(models.Model):

    home_team_obj = models.ForeignKey(Team, on_delete=models.CASCADE, related_name="home_team")
    away_team_obj = models.ForeignKey(Team, on_delete=models.CASCADE, related_name="away_team")
    season_of_league_obj = models.ForeignKey(SeasonOfLeague)
    stadium_obj = models.ForeignKey(Stadium)
    datetime = models.DateTimeField()


class PlayerEvent(models.Model):

    name = models.CharField(max_length=20)


class PlayerEventOfPlayer(models.Model):

    player_event_obj = models.ForeignKey(PlayerEvent, on_delete=models.CASCADE)
    player_obj = models.ForeignKey(Player, on_delete=models.CASCADE)


class TeamEvent(models.Model):

    name = models.CharField(max_length=20)


class TeamEventOfTeam(models.Model):

    team_event_obj = models.ForeignKey(TeamEvent, on_delete=models.CASCADE)
    team_obj = models.ForeignKey(Team, on_delete=models.CASCADE)


class MatchEvent(models.Model):

    name = models.CharField(max_length=20)


class MatchEventOfMatch(models.Model):

    match_obj = models.ForeignKey(Match, on_delete=models.CASCADE)
    match_event_obj = models.ForeignKey(MatchEvent, on_delete=models.CASCADE)
    result = models.CharField(max_length=4)


class TeamEventOfTeamOfMatch(models.Model):

    match_obj = models.ForeignKey(Match, on_delete=models.CASCADE)
    team_event_of_team_obj = models.ForeignKey(TeamEventOfTeam, models.CASCADE)
    result = models.CharField(max_length=4)


class PlayerEventOfPlayerOfMatch(models.Model):

    match_obj = models.ForeignKey(Match, on_delete=models.CASCADE)
    player_event_of_player_obj = models.ForeignKey(PlayerEventOfPlayer, on_delete=models.CASCADE)
