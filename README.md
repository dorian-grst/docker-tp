> npm i

> docker build -t docker-tp:0.0.1 -f Dockerfile .

> docker run -d -p 3333:3333 --env-file .env docker-tp:0.0.1

> docker run -d -p 5432:5432 --env-file .env postgres:latest
