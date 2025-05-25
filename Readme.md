This chapter shows how to create route handler for different http requests.

```
// index.js
import express from 'express'
const app = express()

app.get('/', (req, res)=>{
    res.json("Response from '/' url")
})

app.get('/login', (req, res)=>{
    res.json("Response from '/login' url")
})

app.post('/login', (req, res)=>{
    res.json("Login success")
})


app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})
```

## How it works

### 1. http get request handler (for the root route '/')
_An HTTP GET request handler that responds to GET requests made to the root URL ('/')._

```
app.get('/', (req, res)=>{
    res.json("Response from '/' url")
})
```
* `'/'` : This is the route path where we are looking for response.
* `(req, res)=>{...}` : This is the callback which will be executed upon reaching `'/'` route.
* `res.json("...")` : This is the response we are giving back from the server when client calls `'/'` route.
---
### 2. http get request handler (for the route '/login')
_An HTTP GET request handler that responds to GET requests made to the root URL ('/')._

```
app.get('/login', (req, res)=>{
    res.json("Response from '/login' url")
})
```
* `'/login'` : This is the route path where we are looking for response.
* `(req, res)=>{...}` : This is the callback which will be executed upon reaching `'/login'` route.
* `res.json("...")` : This is the response we are giving back from the server when client calls `'/login'` route.
---
### 3. http post request handler (for the route '/login')
_An HTTP POST request handler that responds to POST requests made to the URL ('/login')._

```
app.post('/login', (req, res)=>{
    res.json("Login success")
})
```
* `'/login'` : This is the route path where we are looking for response.
* `(req, res)=>{...}` : This is the callback which will be executed upon reaching `'/'` route.
* `res.json("...")` : This is the response we are giving back from the server when client calls `'/login'` route.
* A POST request is an HTTP method used by clients (like web browsers or apps) to send data to a server — typically to create, submit, or process something. _(Submitting a login form, Creating a new user account, Sending data to be stored in a database Uploading a file etc..)_

## Test to see if everything works fine.

For any get request, we can open any internet browser (eg: Google chrome, edge, mozilla etc..) and type it like `http://localhost:3000/` or `http://localhost:3000/admin` or `http://localhost:3000/admin/login`

For any post reques, we need an html form to be submitted to the respective route (eg: we can simulate this in postman app with a post method request to `http://localhost:3000/login`)