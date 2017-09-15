from django.contrib.auth.models import AnonymousUser
from _Serializer.serializer import Serializer as S
from django.http import JsonResponse, HttpResponse
import json
import time

class API:

    @staticmethod
    def endpoint(CustomRequest):
        def with_middleware(view):
            def process(request):
                # only for development - no cors headers shall be accepted
                if request.method == "OPTIONS":
                    return HttpResponse(200)
                # --------------------------------------------------------
                custom_request = CustomRequest(request)
                if custom_request.method != custom_request.expected_method:
                    return HttpResponse(status=405)
                if not custom_request.is_valid:
                    return HttpResponse(status=404)
                if custom_request.aud == "USER" and custom_request.user == AnonymousUser():
                    return HttpResponse(status=401)
                if custom_request.aud == "USER" and not custom_request.user.profile.confirmation.is_confirmed:
                    if "confirm_exception" not in custom_request.meta:
                        return HttpResponse(status=403)
                # only for development - for transitions and loading masks
                time.sleep(2)
                # ---------------------------------------------------------
                return JsonResponse(S.serialize(view(custom_request)))
            return process
        return with_middleware
