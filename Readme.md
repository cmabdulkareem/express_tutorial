This chapter will help us to understand what is request (req) and response (res) object and how it can be used inside an express.js project 

## What is request response cycle
The request-response cycle is the fundamental process by which clients (like web browsers) and servers (like web servers) communicate over the internet, especially using the HTTP/HTTPS protocols.

* Client Sends a Request (browser constructs an object and send)  ---> Server Receives the Request (req object)
* Server Sends a Response (resbackend server constructs and object and send) <--- Client Receives the response (res object`)

**Sample http request object:**
```
{
  "method": "GET",
  "url": "/users?id=123",
  "headers": {
    "host": "example.com",
    "user-agent": "Mozilla/5.0",
    "accept": "application/json",
    "authorization": "Bearer your_token_here"
  },
  "query": {
    "id": "123"
  },
  "body": {}
}
```
**Sample response object**
```
{
  "statusCode": 200,
  "statusMessage": "OK",
  "headers": {
    "content-type": "application/json",
    "cache-control": "no-cache",
    "x-powered-by": "Express"
  },
  "body": {
    "id": "123",
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}
```


## Handling requests inside an express.js app
```
/routes/userRoutes.js
import express from 'express'
const router = express.Router()

router.get('/', (req, res)=>{
    res.json("Response from '/' url")
})

router.get('/login', (req, res)=>{
    res.json("Response from '/login' url")
})

router.post('/login', (req, res)=>{
    console.log(req.method);       // 'POST'
    console.log(req.protocol);     // 'http'
    console.log(req.url);          // '/login'
    console.log(req.ip);           // '::1' ip address of the client
    console.log(req.body);         // Data sent in POST/PUT (undefined when matching middleware is not used)
    console.log(req.headers);      // This prints an object containing all the incoming HTTP headers.
})

router.get('/user/:id', (req, res)=>{
    console.log(req.params.id);    // '123' accesses the value of the :id parameter from the URL path.
    console.log(req.url);          // '/user/123'
    console.log(req.path);         // '/user'
})

router.get('/products', (req, res)=>{
    console.log(req.query);        // '{ sorting: 'lth' }' if URL is /products?sorting=lth
    console.log(req.url);          // '/products?sorting=lth'
    console.log(req.path);         // '/products'
})

export default router;
```
* `router.post('/login', (req, res)=>{.....})` - send a post request using postman to http://localhost:3000/login with body (as x-www-form-urlencoded with a username field and password field) to see the result.

* `router.get('/user/:id', (req, res)=>{...})` - send a get request using browser or postman to http://localhost:3000/user/123 to see the result.

* `router.get('/products?sorting=lth', (req, res)=>{...})` - send a get request using browser or postman to http://localhost:3000/products?sorting=lth to see the result.

