import smtplib
from os import getenv
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from jinja2 import Environment, FileSystemLoader, select_autoescape


class Template:
    env = Environment(
        loader=FileSystemLoader('./mail_templates'),
        autoescape=select_autoescape(['html', 'xml'])
    )

    def __init__(self, template_name):
        # Store template name
        self.template_name = template_name
        # Retrieve email subject template
        subject_template_name = '{}/subject.html'.format(self.template_name)
        self.subject = Template.env.get_template(subject_template_name)
        # Retrieve email body template
        body_template_name = '{}/body.html'.format(self.template_name)
        self.body = Template.env.get_template(body_template_name)


def send_email(subject, text, recipients=''):
    status = True
    try:
        # Get global variables
        sender = getenv('INSPECT_CV_EMAIL_SENDER')
        if not recipients:
            recipients = getenv('INSPECT_CV_EMAIL_RECIPIENTS')
        serverUrl = getenv('INSPECT_CV_EMAIL_SERVER')
        login = getenv('INSPECT_CV_EMAIL_LOGIN')
        password = getenv('INSPECT_CV_EMAIL_PASSWORD')
        # Build email message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject
        msg['From'] = sender
        msg['To'] = recipients
        msg.attach(MIMEText(text, 'html'))
        # Connect to SMTP server
        server = smtplib.SMTP(serverUrl)
        server.ehlo()
        server.starttls()
        server.login(login, password)
        # Send message and close connection
        server.sendmail(sender, recipients, msg.as_string())
        server.quit()
    except:
        status = False
    return status
