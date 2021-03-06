from App_Profile.models import *
from _RequestModels import *
import json

class UsernameCheckRequest(CustomGetRequestForPublic):
    def __init__(self, request):
        CustomGetRequestForPublic.__init__(self, request)
        try:
            self.username = request.GET.get("username")
        except:
            self.is_valid = False

class EmailCheckRequest(CustomGetRequestForPublic):
    def __init__(self, request):
        CustomGetRequestForPublic.__init__(self, request)
        try:
            self.email = request.GET.get("email")
        except:
            self.is_valid = False

class InviterCheckRequest(CustomGetRequestForPublic):
    def __init__(self, request):
        CustomGetRequestForPublic.__init__(self, request)
        try:
            self.credential = request.GET.get("inviter")
        except:
            self.is_valid = False


class SignupRequest(CustomPostRequestForPublic):
    def __init__(self, request):
        CustomPostRequestForPublic.__init__(self, request)
        try:
            self.username = json.loads(request.body.decode('utf-8'))["username"]
            self.email = json.loads(request.body.decode('utf-8'))["email"]
            self.password = json.loads(request.body.decode('utf-8'))["password"]
            self.inviter = json.loads(request.body.decode('utf-8'))["inviter"]
            self.is_valid = self.validate()
        except:
            self.is_valid = False

    def validate(self):
        username_available = not Profile.objects.filter(user_obj__username=self.username).exists()
        email_available = not Profile.objects.filter(user_obj__email=self.email).exists()
        valid = (
            len(self.username) > 5 and
            len(self.email) > 5 and
            len(self.password) > 9
        )
        return username_available and email_available and valid

class LoginRequest(CustomPostRequestForPublic):
    def __init__(self, request):
        CustomPostRequestForPublic.__init__(self, request)
        try:
            self.identification = json.loads(request.body.decode('utf-8'))["identification"]
            self.password = json.loads(request.body.decode('utf-8'))["password"]
        except:
            self.is_valid = False

class ConfirmRequest(CustomPostRequestForUser):
    def __init__(self, request):
        CustomPostRequestForPublic.__init__(self, request)
        self.meta["confirm_exception"] = True
        try:
            self.confirmation_code = json.loads(request.body.decode('utf-8'))["confirmationCode"]
        except:
            self.is_valid = False

class UserRequest(CustomGetRequestForUser):
    def __init__(self, request):
        CustomGetRequestForUser.__init__(self, request)
        self.meta["confirm_exception"] = True
        try:
            self.is_valid = True
        except:
            self.is_valid = False
