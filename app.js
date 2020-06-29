const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();

const userRoutes = require('./routes/user')


const app = express();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB connected!')
})

app.use('/api', userRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server is running from port ${port}!`)
});



