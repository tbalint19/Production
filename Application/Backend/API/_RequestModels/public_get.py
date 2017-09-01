from _RequestModels.custom_request import CustomRequest

class CustomGetRequestForPublic(CustomRequest):
    def __init__(self, request):
        super().__init__()
        self.expected_method = "GET"
        self.aud = "PUBLIC"
