from django.contrib.auth.models import User
from django.db import models
import random
import string

class ProfileManager(models.Manager):

    def create_profile(self, username, email, password):
        user = User.objects.create_user(username=username, email=email, password=password)
        profile = Profile(user_obj=user)
        profile.confirmation_code = ProfileManager.generate_confirmation_code()
        profile.save()
        return profile

    def find_user_by_credential(self, credential):
        try:
            if "@" in credential:
                return self.get(user_obj__email=credential)
            else:
                return self.get(user_obj__username=credential)
        except Profile.DoesNotExist:
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

    objects = ProfileManager()

    def confirm_profile(self, confirmation_code):
        if self.confirmation_code != confirmation_code:
            return False
        self.is_confirmed = True
        self.save()
        return True
