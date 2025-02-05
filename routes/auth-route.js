const express = require("express")
const router = express.Router()
const authControllers = require("../controller/auth-controller")

// @ENDPOINT http://localhost:8000/api/register
router.post("/register", authControllers.register)

module.exports = router