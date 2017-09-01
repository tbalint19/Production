from _MSControllers import AuthController

class CustomRequest:
    def __init__(self, request):
        self.__dict__ = request.__dict__.copy()
        self.user = AuthController().authenticate(request.META)
        self.is_valid = True
