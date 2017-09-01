from _RequestModels.custom_request import CustomRequest

class CustomGetRequestForUser(CustomRequest):
    def __init__(self, request):
        super().__init__()
        self.expected_method = "GET"
        self.aud = "USER"
