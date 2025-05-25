import express from 'express'
const router = express.Router()

router.get('/', (req, res)=>{
    res.json("Response from '/admin/' url")
})

router.get('/login', (req, res)=>{
    res.json("Response from '/admin/login' url")
})

export default router;