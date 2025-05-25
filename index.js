import express from 'express'
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
const app = express()

app.use('/', userRoutes)
app.use('/admin', adminRoutes)

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})