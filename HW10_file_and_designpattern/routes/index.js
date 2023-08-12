const express = require("express");
const router = express.Router();
const movieRouter = require("./movie.js")
const userRouter = require("./user.js")

router.use("/movies", movieRouter)
router.use("/user", userRouter)


module.exports = router;