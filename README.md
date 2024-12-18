# Empty req.body in Express.js POST Request

This repository demonstrates a common issue in Express.js applications where the `req.body` object remains empty despite sending JSON data in a POST request.  The bug is related to a missing or incorrectly configured body-parsing middleware.

## Bug

The `bug.js` file contains an Express.js server that attempts to handle a POST request to the `/data` endpoint. However, due to the missing body-parser middleware, `req.body` will always be empty.

## Solution

The `bugSolution.js` file provides the corrected code.  It includes `express.json()` middleware to correctly parse JSON requests. This allows the server to access the request body data.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `npm install` to install express.
4. Run `node bug.js`.  Send a POST request to `http://localhost:3000/data` with JSON payload using a tool like Postman or curl.
5. Observe that the console logs an empty object.
6. Run `node bugSolution.js`.  Send the same POST request.
7. Observe that the console correctly logs the JSON data.