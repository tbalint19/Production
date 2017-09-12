from App_Profile.requests import *
from App_Profile.models import *
from _MSControllers import *
from _Middleware import API


@API.endpoint(UsernameCheckRequest)
def check_username(request):
    return {'is_occupied': Profile.objects.filter(user_obj__username=request.username.lower()).exists()}


@API.endpoint(EmailCheckRequest)
def check_email(request):
    return {'is_occupied': Profile.objects.filter(user_obj__email=request.email.lower()).exists()}


@API.endpoint(InviterCheckRequest)
def check_inviter(request):
    return {'is_occupied': Profile.objects.filter(user_obj__username=request.credential.lower()).exists()}


@API.endpoint(SignupRequest)
def signup_user(request):
    profile = Profile.objects.create_profile(request.username, request.email, request.password, request.inviter)
    if profile is not None:
        controller = EmailController()
        controller.send_confirm_email(profile.user_obj.username, profile.user_obj.email, profile.confirmation_code)
    return {'is_successful': profile is not None}


@API.endpoint(LoginRequest)
def login_user(request):
    profile = Profile.objects.authenticate_user(request.identification, request.password)
    if profile is not None:
        controller = AuthController()
        token = controller.login(profile.user_obj.id)
    return {'token': None if profile is None else token}


@API.endpoint(ConfirmRequest)
def confirm_profile(request):
    return {'is_successful': request.user.profile.confirm_profile(request.confirmation_code)}


@API.endpoint(UserRequest)
def get_user(request):
    return {'user': {'username': request.user.username, 'email': request.user.email}, 'profile': request.user.profile}
