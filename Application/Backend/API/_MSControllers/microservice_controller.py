import requests
from _Serializer.serializer import Serializer as S

class MicroserviceController:
    def __init__(self):
        self.service_url = "http://localhost:8000"

    def get(self, path, params):
        url = self.build_url(path, params)
        response = requests.get(url)
        data = response.json()
        return data

    def post(self, path, data):
        url = self.service_url + path
        post_data = S.cleanse(data)
        response = requests.post(url, json=post_data)
        data = response.json()
        return data

    def build_url(path, params):
        query_params = ""
        for key in params:
            if query_params == "":
                query_params = query_params + "?"
            else:
                query_params = query_params + "&"
            query_params = query_params + key + "=" + params[key]
        return self.service_url + path + query_params
