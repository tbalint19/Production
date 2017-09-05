from _RequestModels.custom_request import CustomRequest

class CustomGetRequestForUser(CustomRequest):
    def __init__(self, request):
        CustomRequest.__init__(self, request)
        self.expected_method = "GET"
        self.aud = "USER"
