const express = require('express')
const appRouter = express.Router()

const {Mainpage} = require("../controller/app")

appRouter.get("/" ,Mainpage);

module.exports = appRouter;