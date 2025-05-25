import express from 'express'
const app = express()

app.get('/', (req, res)=>{
    res.json("Response from '/' url")
})

app.get('/admin/', (req, res)=>{
    res.json("Response from '/admin/' url")
})

app.get('/admin/login', (req, res)=>{
    res.json("Response from '/admin/login' url")
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