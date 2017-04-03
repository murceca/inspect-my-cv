import cherrypy
from forms import ContactForm, InspectCVForm


class App(object):
    @cherrypy.expose
    def index(self):
        return 'Inspect my CV API'

    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def inspect_cv(self):
        try:
            form = InspectCVForm(**cherrypy.request.json)
            status = form.submit()
        except:
            status = False
        return {
            'success': status
        }

    @cherrypy.expose
    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def contact(self):
        try:
            form = ContactForm(**cherrypy.request.json)
            status = form.submit()
        except:
            status = False
        return {
            'success': status
        }

if __name__ == '__main__':
    cherrypy.quickstart(App(), '/api')
