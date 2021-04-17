# Postgres Docker Backend Template

This is a templated created with a express api and postgres + pgadmin backend with default values. This template is a very barebones but functioning backend template that can be used for any postgres based instance.

## Getting started

Copy over the .env.example as .env. Right now, this is pretty blank, but can be adjusted as necessary.

Install packages: 

```
npm i
```
Build the docker container:

```
docker-compose build
``` 

Run the development server:

```
docker-compose up
```

Migrate and Seed the database:

```
npm run dbFill
```

Alternitavely, if you want to just migrate or just seed, the commands are available as well:

```
npm run migrate
```

```
npm run seed
```

Open [http://localhost:5000](http://localhost:5000) to hit the api.

Open [http://localhost:5050](http://localhost:5050) to hit PGAdmin. The default username is admin@pgadmin.com and the password is root.

Postgres is located in http://localhost:5432, the username is root, password is root, the db is postgres. 