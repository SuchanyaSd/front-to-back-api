const express = require("express")
const route = express.Router()
// Import controller
const userController = require("../controller/user_controller")

// @ENDPOINT http://localhost:8000/api/users
route.get("/users", userController.listUser)
route.patch("/user/update-role", userController.updateRole)
route.delete("/user/:id", userController.deleteUser)

module.exports = route