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