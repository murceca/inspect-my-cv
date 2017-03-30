import cherrypy
from mail import Template
from mail import send_email


class App(object):
    def __init__(self):
        super()
        self.inspect_cv_request_tpl = Template('inspect_cv_request')
        self.inspect_cv_response_tpl = Template('inspect_cv_response')
        self.contact_request_tpl = Template('contact_request')
        self.contact_response_tpl = Template('contact_response')

    @cherrypy.expose
    def index(self):
        return 'Inspect my CV API'

    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def inspect_cv(self):
        data = cherrypy.request.json
        subject = self.inspect_cv_request_tpl.subject.render(user=data)
        text = self.inspect_cv_request_tpl.body.render(user=data)
        status = send_email(subject, text)
        if status:
            subject = self.inspect_cv_response_tpl.subject.render(user=data)
            text = self.inspect_cv_response_tpl.body.render(user=data)
            status = send_email(subject, text, data['email'])
        return {
            'success': status
        }

    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def contact(self):
        data = cherrypy.request.json
        subject = self.contact_request_tpl.subject.render(user=data)
        text = self.contact_request_tpl.body.render(user=data)
        status = send_email(subject, text)
        if status:
            subject = self.contact_response_tpl.subject.render(user=data)
            text = self.contact_response_tpl.body.render(user=data)
            status = send_email(subject, text, data['email'])
        return {
            'success': status
        }

if __name__ == '__main__':
    cherrypy.quickstart(App())
