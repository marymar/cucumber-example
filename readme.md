# Cucumber example

A simple example to run cucumber tests.

## Run the installation

    npm install

## Start a local server

    npm start

## Run the test

    npm test


# Run tests within a Docker Container

Build the image

    docker build -t cucumbertest . --build-arg HTTP_PROXY=$HTTP_PROXY --build-arg HTTPS_PROXY=$HTTP_PROXY

Docker run

    docker run --name cucumbertest  -i -t --rm -p 8000:8080 cucumbertest
