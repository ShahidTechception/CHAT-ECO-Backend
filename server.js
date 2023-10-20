
import express from 'express'
import cors from 'cors' // important for recieving api calls

import * as dotenv from 'dotenv';
dotenv.config();
import upload from 'express-fileupload'

import connectDB from './database/db.js'
import appAdministrator from './Routes/User.js'

connectDB();
const app = express()
app.use(cors()) // important for recieving api calls
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(upload());

app.use('/api/app-administrator', appAdministrator)


app.get('/',(req,res)=>{
    res.send('Welcome to CHAT-ECO')
})



const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
