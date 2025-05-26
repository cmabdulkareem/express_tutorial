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
* after moving all route handlers, change all handlers from `app.` to `router.` (eg: `app.get('/', (req, res)=>{...})` to `router.get('/', (req, res)=>{...})`) 

### Move all admin related routes from index.js to /routes/adminRoutes.js
```
/routes/adminRoutes.js
import express from 'express'
const router = express.Router()

router.get('/', (req, res)=>{
    res.json("Response from '/admin/' url")
})

router.get('/login', (req, res)=>{
    res.json("Response from '/admin/login' url")
})

export default router;
```
* `const router = express.Router()` : Creates a new modular router instance to define and group route handlers separately from the main app.
* after moving all route handlers, change all handlers from `app.` to `router.` (eg: `app.get('/', (req, res)=>{...})` to `router.get('/', (req, res)=>{...})`)
* no need `/admin/` pefix for any of the admin routes, this can be configured in the next step.

### Import newly created routes to main file (index.js) and use them in middlewre

/index.js

```
import express from 'express'
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
const app = express()

app.use('/', userRoutes)
app.use('/admin/', adminRoutes)

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})
```
* import routing functions using `import userRoutes from './routes/userRoutes.js';` and `import adminRoutes from './routes/adminRoutes.js';`
* `app.use('/', userRoutes)` :
* `app.use('/admin/, adminRoutes)` :
They connect the route handlers from userRoutes to the root path / and the ones from adminRoutes to the /admin path, organizing the app’s URLs accordingly.

## Test to see if everything works fine.