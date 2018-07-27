# Gotcha Demo Backend
> A Django Project

## Overview
  - REST API
  - Admin Interface
  
## Getting Started for Development

### Requirements
  - [Python 3.5+](https://www.python.org/downloads/)
  - [Virtualenv](https://virtualenv.pypa.io/en/stable/installation/)

### Initial Setup
```bash
# Activate Virtual Environment
source env/bin/activate

# Install Python Requirements
pip install --upgrade pip
pip install -r requirements.txt

# Initialize Database
python manage.py migrate

# to collect assets ans statics
python manage.py collectstatic

# Run Django Server
python manage.py runserver 0.0.0.0:8080
```
### Initial Setup for App
```bash
# Change BASE_URL and GET_ALL_NOTES 
source src/config/global.js 
```
### Other Helpful Commands
```bash
# Create Admin User for Django
python manage.py createsuperuser

# Run tests
python manage.py test notes
```

### Apis 
```bash
#Get all Notes
curl -H 'Accept: application/json; indent=4' 'http://192.168.1.192:8080/notes/?format=json'

#Get single note
curl -H 'Accept: application/json; indent=4' 'http://192.168.1.192:8080/notes/12/?format=json'

#Add any note
curl -X POST -d title='new' -d color='black' -d details='my details' -H 'Accept: application/json; indent=4' 'http://192.168.1.192:8080/notes/?format=json'

#Update any note 
curl -X PUT -d title='durgesh' -H 'Accept: application/json; indent=4' 'http://192.168.1.192:8080/notes/12/?format=json'

#Delete any note 
curl -X DELETE 'http://192.168.1.192:8080/notes/11/?format=json'
```
