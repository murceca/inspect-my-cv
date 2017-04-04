from pyvalid import accepts
from mail import Template
from mail import send_email


class ContactForm:
    request_tpl = Template('contact_request')
    response_tpl = Template('contact_response')

    @accepts(object, str, str, str, str)
    def __init__(self, name, phone, email, message):
        self.name = name
        self.phone = phone
        self.email = email
        self.message = message

    def submit(self):
        data = self.__dict__
        subject = ContactForm.request_tpl.subject.render(user=data)
        text = ContactForm.request_tpl.body.render(user=data)
        status = send_email(subject, text)
        if status:
            subject = ContactForm.response_tpl.subject.render(user=data)
            text = ContactForm.response_tpl.body.render(user=data)
            status = send_email(subject, text, self.email)
        return status


class InspectCVForm:
    request_tpl = Template('inspect_cv_request')
    response_tpl = Template('inspect_cv_response')

    @accepts(object, str, str, True)
    def __init__(self, email, message, accept_terms):
        self.email = email
        self.message = message
        self.accept_terms = accept_terms

    def submit(self):
        data = self.__dict__
        subject = InspectCVForm.request_tpl.subject.render(user=data)
        text = InspectCVForm.request_tpl.body.render(user=data)
        status = send_email(subject, text)
        if status:
            subject = InspectCVForm.response_tpl.subject.render(user=data)
            text = InspectCVForm.response_tpl.body.render(user=data)
            status = send_email(subject, text, self.email)
        return status
