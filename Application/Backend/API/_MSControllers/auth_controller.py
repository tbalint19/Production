from _MSControllers.microservice_controller import MicroserviceController
from django.contrib.auth.models import User, AnonymousUser

class AuthController(MicroserviceController):
    def __init__(self):
        self.service_url = "http://localhost:5000"

    def login(self, user_id):
        path = "/login"
        data = {'user_id': user_id}
        response = self.post(path, data)
        token = response['token']
        return token

    def authenticate(self, headers):
        path = "/authenticate"
        response = self.post(path, headers)
        user_id = response['user_id']
        if user_id:
            user = User.objects.get(id=user_id)
        else:
            user = AnonymousUser()
        return user
