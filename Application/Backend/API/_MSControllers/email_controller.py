from _MSControllers.microservice_controller import MicroserviceController

class EmailController(MicroserviceController):
    def __init__(self):
        self.service_url = "http://localhost:3000"

    def send_confirm_email(self, username, email, confirmation_code):
        path = "/confirmation"
        link = 'localhost:8000?confirmation_code=' + confirmation_code
        data = {'to': email, 'name': username, 'link': link}
        response = self.post(path, data)
        is_attempted = response['attempted']
        return is_attempted
