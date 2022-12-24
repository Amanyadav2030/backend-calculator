const express = require('express')
const dbConnect = require('./config/db')
const {TicketRouter,UserRouter,BookmarkRouter} = require('./routes/index');
const cors = require('cors');
const PORT = process.env.PORT || 8080
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use("/ticket", TicketRouter);
app.use("/user", UserRouter);
app.use("/bookmark", BookmarkRouter);
app.get('/', (req, res) => res.send('hello'))
app.listen(PORT, async() => {
    await dbConnect();
    console.log('server started on port 8080')}
)