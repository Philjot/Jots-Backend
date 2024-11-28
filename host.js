import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'


dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'));

const PORT = process.env.PORT || 3500

app.listen(PORT, (err)=>{
    console.log('listening at '+ PORT)
})

mongoose.connect(process.env.server)
.then(()=>{
    console.log('server is connected')
})
.catch ((error)=>{
    console.log(error)
})