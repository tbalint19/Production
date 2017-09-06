from App_Profile.requests import *
from App_Profile.models import *
from _MSControllers import *
from _Middleware import API


@API.endpoint(UsernameCheckRequest)
def check_username(request):
    return {'is_occupied': Profile.objects.filter(user_obj__username=request.username).exists()}


@API.endpoint(EmailCheckRequest)
def check_email(request):
    return {'is_occupied': Profile.objects.filter(user_obj__email=request.email).exists()}


@API.endpoint(SignupRequest)
def signup_user(request):
    profile = Profile.objects.create_profile(request.username, request.email, request.password)
    if profile is not None:
        controller = EmailController()
        controller.send_confirm_email(profile.user_obj.username, profile.user_obj.email, profile.confirmation_code)
    return {'isSuccessful': profile is not None}


@API.endpoint(LoginRequest)
def login_user(request):
    user = Profile.objects.authenticate_user(request, request.identification, request.password)
    if user is not None:
        controller = AuthController()
        token = controller.login(user.id)
    return {'token': None if user is None else token}


@API.endpoint(ConfirmRequest)
def confirm_profile(request):
    return {'isSuccessful': request.user.profile.confirm_profile(request.confirmation_code)}
