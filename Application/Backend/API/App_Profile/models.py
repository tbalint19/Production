from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.db import models
import random
import string

class ProfileManager(models.Manager):

    def get_profile_by_credential(self, identification):
        if "@" in identification:
            profile = self.get_profile_or_none_by_email(identification)
        else:
            profile = self.get_profile_or_none_by_username(identification)
        return profile

    def get_profile_or_none_by_username(self, username):
        if username:
            try:
                return self.get(user_obj__username=username.lower())
            except Profile.DoesNotExist:
                return None
        return None

    def get_profile_or_none_by_email(self, email):
        if email:
            try:
                return self.get(user_obj__email=email.lower())
            except Profile.DoesNotExist:
                return None
        return None

    def create_profile(self, username, email, password, inviter):
        user = User.objects.create_user(username=username.lower(), email=email.lower(), password=password)
        profile = Profile(user_obj=user)
        profile.confirmation_code = ProfileManager.generate_confirmation_code()
        inviter_obj = self.get_profile_or_none_by_username(inviter)
        if inviter_obj:
            profile.inviter = inviter_obj
        profile.save()
        return profile

    def authenticate_user(self, identification, password):
        profile = self.get_profile_by_credential(identification)
        if profile:
            if profile.user_obj.check_password(password):
                return profile
        return None

    @staticmethod
    def generate_confirmation_code():
        confirmation_code = ''.join(random.sample(string.ascii_uppercase + string.digits, k=20))
        return confirmation_code

class Profile(models.Model):

    user_obj = models.OneToOneField(User, on_delete=models.CASCADE)
    rank = models.CharField(max_length=20, default="newbie")
    annual_points = models.IntegerField(default=0)
    monthly_points = models.IntegerField(default=0)
    is_confirmed = models.BooleanField(default=False)
    confirmation_code = models.CharField(max_length=25, default=None, blank=True, null=True)
    inviter = models.ForeignKey('self', null=True, default=None, blank=True)

    objects = ProfileManager()

    def confirm_profile(self, confirmation_code):
        if self.confirmation_code != confirmation_code:
            return False
        self.is_confirmed = True
        self.save()
        return True
