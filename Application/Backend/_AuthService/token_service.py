import jwt

class TokenService:

    def __init__(self):
        self.secret_key = "verySecretKey"
        self.algorithm = 'HS256'

    def generate_token(self, payload):
        data_with_hash = jwt.encode(payload, self.secret_key, algorithm=self.algorithm)
        token = data_with_hash.decode("utf-8")
        return token

    def get_payload(self, token):
        data_with_hash = token.encode("utf-8")
        try:
            payload = jwt.decode(data_with_hash, self.secret_key, algorithm=self.algorithm)
        except jwt.DecodeError:
            payload = None
        return payload
