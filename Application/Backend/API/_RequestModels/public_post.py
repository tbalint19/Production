from _RequestModels.custom_request import CustomRequest

class CustomPostRequestForPublic(CustomRequest):
    def __init__(self, request):
        super().__init__()
        self.expected_method = "POST"
        self.aud = "PUBLIC"
