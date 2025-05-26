import express from 'express'
const router = express.Router()

router.get('/', (req, res)=>{
    let isLoggedIn = true
    
    if(isLoggedIn){
        res.status(300).redirect('/login')
        // redirects the route to '/login' and response to the client with a status code 300
    }else{
        res.status(200).send("Response from '/home' url")
        //  sends a plain text response to the client with a status code 200
    } 
})

router.get('/login', (req, res)=>{
    res.status(200).json({message:"Response from '/login' url"})    
    // sends a json response to the client with a status code 200
})

router.post('/login', (req, res)=>{
    console.log(req.method);       // 'POST'
    console.log(req.protocol);     // 'http'
    console.log(req.url);          // '/login'
    console.log(req.ip);           // '::1' ip address of the client
    console.log(req.body);         // Payload : Data sent in POST/PUT (undefined when matching middleware is not used)
    console.log(req.headers);      // This prints an object containing all the incoming HTTP headers.
})

router.get('/user/:id', (req, res)=>{
    console.log(req.params.id);    // '123' accesses the value of the :id parameter from the URL path.
})

router.get('/products', (req, res)=>{
    console.log(req.query);        // '{ sorting: 'lth' }' if URL is /products?sorting=lth
    console.log(req.url);          // '/products?sorting=lth'
    console.log(req.path);         // '/products'
})

export default router;