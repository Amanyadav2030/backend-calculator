const express = require('express')
const dbConnect = require('./config/db')
const {UserRouter,EmiRouter} = require('./routes/index');
const cors = require('cors');
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use('/user',UserRouter);
app.use('/calculateEMI',EmiRouter);
app.get('/', (req, res) => res.send('hello'))

app.listen(8080, async() => {
    await dbConnect();
    console.log('server started on port 8080')}
)