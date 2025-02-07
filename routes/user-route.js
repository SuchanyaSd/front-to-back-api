const express = require("express")
const route = express.Router()
// Import controller
const userController = require("../controller/user_controller")
const { authCheck } = require("../middlewares/auth-middleware")

// @ENDPOINT http://localhost:8000/api/users
route.get("/users", authCheck,userController.listUser)
route.patch("/user/update-role", authCheck, userController.updateRole)
route.delete("/user/:id", authCheck, userController.deleteUser)

module.exports = route