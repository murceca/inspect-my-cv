# Inspect my CV

Inspect my CV is application to improve your resume.

---

# Front-end application

## How to install

1. Go to front-end directory: `cd frontend`
2. Install Gulp (globally): `sudo npm install -g gulp`
3. Install npm packages: `npm install`

## How to start

1. Go to front-end directory: `cd frontend`
2. Start web-server `gulp serve` or just build project `gulp build`
3. Application will be available by `localhost:3000` address

## How to test

We are using JavaScript validation tool ESLint.
You can run ESLint using `gulp test` command.

---

# Back-end application

## How to install

1. Go to back-end directory: `cd backend`
2. Create virtual environment in the `env` folder: `virtualenv env`
3. Activate virtual environment: `source env/bin/activate`
4. Install python requirements: `pip install -r requirements.txt`

## How to start

1. Go to back-end directory: `cd backend`
2. Configure global environment variables: `source .exports`
3. Activate virtual environment: `source env/bin/activate`
4. Start python application: `python app.py`
5. Application will be available by `localhost:8080` address

## API endpoints

### Root URL - does nothing
- URL: `/`
- METHOD: GET

### Inspect CV - handles inspect-cv form
- URL: `/inspect_cv`
- METHOD: POST
- PARAMS: JSON object {email, file, message}
- RETURNS: JSON object {status}

### Contact - handles contact-us form
- URL: `/contact`
- METHOD: POST
- PARAMS: JSON object {name, email, phone, message}
- RETURNS: JSON object {status}

### Email templates

- `contact_request/subject.html`
- `contact_request/body.html`
- `contact_response/subject.html`
- `contact_response/body.html`
- `inspect_cv_request/subject.html`
- `inspect_cv_request/body.html`
- `inspect_cv_response/subject.html`
- `inspect_cv_response/body.html`
