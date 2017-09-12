from flask import Flask, jsonify, request
from token_service import TokenService
import json

app = Flask(__name__)

@app.route('/login', methods=['POST'])
def login():
    user_id = request.get_json()['user_id']
    payload = {'user_id': user_id}
    service = TokenService()
    token = service.generate_token(payload)
    return jsonify({'token': token})

@app.route('/authenticate', methods=['POST'])
def authenticate():
    headers = request.get_json()
    if "HTTP_AUTH_TOKEN" not in headers:
        return jsonify({'user_id': None})
    token = headers["HTTP_AUTH_TOKEN"]
    service = TokenService()
    payload = service.get_payload(token)
    if not payload:
        return jsonify({'user_id': None})
    user_id = payload["user_id"]
    return jsonify({'user_id': user_id})

if __name__ == '__main__':
    app.run(debug=True)
