# Postgres Docker Backend Template

This is a templated created with a express api and postgres + pgadmin backend with default values. This template is a very barebones but functioning backend template that can be used for any postgres based instance.

## Getting started

Copy over the .env.example as .env. Right now, this is pretty blank, but can be adjusted as necessary.

Build the docker container:
```
docker-compose build
``` 

Run the development server:

```
docker-compose up
```

Open [http://localhost:5000](http://localhost:5000) to hit the api.

Open [http://localhost:5050](http://localhost:5050) to hit PGAdmin. The default username is admin@pgadmin.com and the password is root.

Postgres is located in http://localhost:5000, the username is admin, password is root, the db is postgres. 