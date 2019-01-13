# RESTful Web API with Node.js Framework

This project is to build a RESTful API using a Node.js framework that will interfaces with the private blockchain. I chose to use the Express JS framework in this project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Prerequisites

Installing Node and NPM is pretty straightforward using the installer package available from the (Node.js® web site)[https://nodejs.org/en/].

### Steps to test the project

1. Clone the repository to your local computer.
2. Open the terminal and install the packages: `npm install`.
3. Run your application and test your endpoints refer to the "Running the tests" section.



## Running the tests

To test code with Curl, first open a command prompt or shell terminal, start the application:
```
node app.js
```

### GET request 

1. Open a command prompt or shell terminal.
2. Enter the following request command with a block height, such as 0,1,2...
```
curl http://localhost:8000/block/0
```

### POST request 

1. Open a command prompt or shell terminal.
2. Enter the following request command with a block body content:
```
curl -X "POST" "http://localhost:8000/block" -H 'Content-Type: application/json' -d $'{"body":"test block body contents"}'
```
