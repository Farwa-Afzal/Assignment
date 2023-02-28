// const router = require("./../task3/api/route/auth.route");
const express = require("express");
const app = express()
const port = 4000;

app.use(express.json())

const mongoose = require('./api/helper/db-helper')
const authRoutes = require('./api/route/auth.route')
mongoose()

app.use('/api',authRoutes);
app.listen(port, ()=>{
    console.log("-------------->Working", port);
})
