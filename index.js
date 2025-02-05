const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

// Routing
const authRouter = require("./routes/auth-route")

const app = express()

// Middlewares
app.use(cors())
app.use(morgan())
app.use(express())

// Routing
app.use("/api", authRouter)


// Start Server
const PORT = 8000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))