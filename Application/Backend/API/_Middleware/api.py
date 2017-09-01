from django.contrib.auth.models import AnonymousUser
from _Serializer.serializer import Serializer as S
from django.http import JsonResponse
import json

class API:

    @staticmethod
    def endpoint(CustomRequest):
        def with_middleware(view):
            def process(request):
                custom_request = CustomRequest(request)
                if custom_request.method != custom_request.expected_method:
                    return HttpResponse(status=404)
                if not custom_request.is_valid:
                    return HttpResponse(status=403)
                if custom_request.aud == "USER" and custom_request.user == AnonymousUser():
                    return HttpResponse(status=401)
                return JsonResponse(S.serialize(view(custom_request)))
            return process
        return with_middleware
