const dotenv = require('dotenv')
const express = require('express')
/* database connection */
const connectDB = require('./databaseConnection/db')
/* load config */
dotenv.config({path:'./config/config.env'})
const PORT = process.env.PORT || 3000
const app = express()

const matches = require('./routes/match')

/* middleware */

app.use(express.static('views'))
app.use(express.json())

/* routes */
app.use('/api/v1/events',matches)



const connectionStart = async () =>{
    await connectDB();
    app.listen(PORT,()=>{
    console.log('connected to port: '+PORT);
})
}

connectionStart()
