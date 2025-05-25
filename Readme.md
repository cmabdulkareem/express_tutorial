This chapter shows how to create route modules to organise our code better. (cleaner, easier to maintain)

### Move all user related routes from index.js to /routes/userRoutes.js
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
    res.json("Login success")
})

export default router;
```
* `const router = express.Router()` : Creates a new modular router instance to define and group route handlers separately from the main app.
* after moving change all requests from `app.` to `router.` (eg: `app.get('/', (req, res)=>{...})` to `router.get('/', (req, res)=>{...})`) 


## Test to see if everything works fine.

For any get request, we can open any internet browser (eg: Google chrome, edge, mozilla etc..) and type it like `http://localhost:3000/` or `http://localhost:3000/admin` or `http://localhost:3000/admin/login`

For any post reques, we need an html form to be submitted to the respective route (eg: we can simulate this in postman app with a post method request to `http://localhost:3000/login`)