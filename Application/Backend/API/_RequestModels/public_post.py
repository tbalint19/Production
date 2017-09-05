from _RequestModels.custom_request import CustomRequest

class CustomPostRequestForPublic(CustomRequest):
    def __init__(self, request):
        CustomRequest.__init__(self, request)
        self.expected_method = "POST"
        self.aud = "PUBLIC"
