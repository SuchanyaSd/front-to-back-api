const express = require("express")
const router = express.Router()
const authControllers = require("../controller/auth-controller")
const { validateWithZod, registerSchema, loginSchema } = require("../middlewares/validators")
const {authCheck} = require("../middlewares/auth-middleware")



// @ENDPOINT http://localhost:8000/api/register
router.post("/register", validateWithZod(registerSchema), authControllers.register)
router.post("/login", validateWithZod(loginSchema), authControllers.login)

router.get("/current-user", authCheck, authControllers.currentUser)

// Export
module.exports = router