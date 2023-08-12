require("dotenv").config();
const express = require('express')
const app = express()
const port = 3000
const router = require("./routes")
const errorHandler = require("./middlewares/errorHandler.js")

app.use(express.static('uploads'))
app.use(router);
app.use(errorHandler);
app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})