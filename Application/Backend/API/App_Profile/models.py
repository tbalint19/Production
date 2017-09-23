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
        profile.save()
        Invitation.objects.create_inivtation_if_possible(profile, inviter)
        Confirmation.objects.create_confirmation(profile)
        return profile

    def authenticate_user(self, identification, password):
        profile = self.get_profile_by_credential(identification)
        if profile:
            if profile.user_obj.check_password(password):
                return profile
        return None


class Profile(models.Model):

    user_obj = models.OneToOneField(User, on_delete=models.CASCADE)
    rank = models.CharField(max_length=20, default="newbie")
    annual_points = models.IntegerField(default=0)
    monthly_points = models.IntegerField(default=0)

    objects = ProfileManager()

    def confirm_profile(self, confirmation_code):
        if self.confirmation.code != confirmation_code:
            return False
        self.confirmation.is_confirmed = True
        self.save()
        return True

    def get_user_data(self):
        return {'username': self.user_obj.username, 'email': self.user_obj.email}

class ConfirmationManager(models.Manager):

    @staticmethod
    def generate_confirmation_code():
        confirmation_code = ''.join(random.sample(string.ascii_uppercase + string.digits, k=20))
        return confirmation_code

    def create_confirmation(self, profile):
        code = ConfirmationManager.generate_confirmation_code()
        confirmation = Confirmation(profile_obj=profile, code=code)
        confirmation.save()
        return confirmation

class Confirmation(models.Model):

    profile_obj = models.OneToOneField(Profile, on_delete=models.CASCADE)
    code = models.CharField(max_length=25)
    is_confirmed = models.BooleanField(default=False)

    objects = ConfirmationManager()


class Reset(models.Model):

    profile_obj = models.ForeignKey(Profile, on_delete=models.CASCADE)
    code = models.CharField(max_length=50)
    created = models.DateTimeField()
    is_used = models.BooleanField(default=False)


class InvitationManager(models.Model):

    def create_inivtation_if_possible(self, invited, inviter):
        inviter_obj = Profile.objects.get_profile_or_none_by_username(inviter)
        if inviter_obj:
            invitation = Invitation(inviter=inviter_obj, invited=invited)
            invitation.save()
            return invitation
        return None

class Invitation(models.Model):

    inviter = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="inviter")
    invited = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="invited")

    objects = InvitationManager()
