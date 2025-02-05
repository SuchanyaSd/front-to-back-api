# Server

## Step 1 create package
```bash
npm init -y
```

## Step 2 install package...
```bash
npm i express nodemon cors morgan bcryptjs jsonwebtoken zod prisma
```

```bash
npx prisma init
```

## Step 3 Git
```bash
git init
git add .
git commit -m "message"
```

next Step
copy code from repo
only first time
```bash
git remote add origin https://github.com/SuchanyaSd/front-to-back-api.git
git branch -M main
git push -u origin main
```

when update code
```bash
git add .
git commit -m "message"
git push
```

## Step 4 update package.json

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  }
}
```

and code
index.js

```js
const express = require("express");
const app = express();

// Start Server
const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
```

## Step 5 use middlewares

```js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// Middlewares
app.use(cors()); // Allows cross domain
app.use(morgan("dev")); // Show log terminal
app.use(express.json()); // For read json

// Routing

// Start Server
const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
```

## Step 6 Routing & Controller [Register]

/controllers/auth-controller.js

```js
exports.register = (req, res, next) => {
  try {
    // code
    res.json({ message: "hello register " });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error!!" });
  }
};
```

/routes/auth-route.js

```js
const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");

// @ENDPOINT http://localhost:8000/api/register
router.post("/register", authControllers.register);

// export
module.exports = router;
```

## Step 7 Create handle Error

/middlewares/error.js

```js
const handleErrors = (err, req, res, next) => {
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Something wrong!!" });
};
module.exports = handleErrors;
```

and use in index.js

```js
const handleErrors = require("./middlewares/error");

// Handle errors
app.use(handleErrors);
```

and change in try_catch

```js
exports.login = (req, res, next) => {
  //code
  try {
    console.log(aaa);
    res.json({ message: "Hello Login " });
  } catch (error) {
    next(error);
  }
};
```

when update code in Github

```bash
git add .
git commit -m "message"
git push
```

============================================================================================

# Server

## Step 1 create package 
```bash
npm init -y
```
## Step 2 install package...
```bash
npm install express nodemon cors morgan bcryptjs jsonwebtoken zod prisma
```
```bash
npx prisma init
```

## Step 3 Git
```bash
git init
git add .
git commit -m "message"
```

next step
copy code from repo
only first time
```bash
git remote add origin https://github.com/NanYodrabum/front-to-back-api.git
git branch -M main
git push -u origin main
```
when update code
```bash
git add .
git commit -m "message"
git push
```
## Step 4 update package.json
```json
{
"scripts": {
    "start" : "nodemon index.js"
  },
}
```
## Step 5 use middlewears
```js
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const app = express()

//Middlewears
app.use(cors()) //Allows cross domain 
app.use(morgan("dev")) //Show log  terminal
app.use(express.json()) //For read json

//Routing

//start server
const PORT = 8003
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
```

## Step 6 Routing and Controllers [Register]
/controllers/auth-controllers.js
```js
exports.register = (req,res,next) => {
    try {
        res.json({message : "Hello register"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server Error!!"})
    }
}
```
/routes/auth-routes.js
```js
const express = require("express")
const router = express.Router()
const authControllers = require("../controllers/auth-controllers")

// @ENDPOINT http://localhost:8003/api/register
router.post("/register", authControllers.register)

//export
module.exports = router
```

## Step 7  Routing and Controllers [Login]
/controllers/auth-controllers.js
```js
exports.login = async (req, res, next) => {
  try {
   
    res.json({ message: "Hello Login" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error!!" });
  }
};
```
/routes/auth-routes.js
```js
const express = require("express")
const router = express.Router()
const authControllers = require("../controllers/auth-controllers")

// @ENDPOINT http://localhost:8003/api/register
router.post("/register", authControllers.register)
router.post("/login",authControllers.login)

//export
module.exports = router
```
## Step 8 Create handle Error
/middlewears/error.js
```js
const handleErrors = (err, req, res, next) => {
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Something wrong!!" });
};

module.exports = handleErrors;
```
and use in index.js
```js
const handleErrors = require("./middlewears/error")

//Handle errors
app.use(handleErrors)
```

and change in try catch
```js
exports.login = async (req, res, next) => {
  try {
    res.json({ message: "Hello Login" });
  } catch (error) {
    next(error)
  }
}
```

when update code in Github
```js
git add .
git commit -m "message"
git push
```

## Step 9 Create Error 
/utils/createError.jd
```js
const handleErrors = (err, req, res, next) => {
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Something wrong!!" });
};

module.exports = handleErrors;
```
## Step 10 Validator with Zod
/controllers/validators.js
```js
const { z } = require("zod");
//npm i zod
//Test validator
exports.registerSchema = z
  .object({
    email: z.string().email("Email is not correct"),
    firstname: z.string().min(3, "Firstname should be more than 3 characters"),
    lastname: z.string().min(3, "Lastname should be more than 3 characters"),
    password: z.string().min(6, "Password should be more than 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "ConfirmPassword should be more than 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Confirm Password is not the same",
    path: ["confirmPassword"],
  });

exports.loginSchema = z.object({
  email: z.string().email("Email is not correct"),
  password: z.string().min(6, "Password should be more than 6 characters"),
});

exports.validateWithZod = (schema) => (req, res, next) => {
  try {
    console.log("Hello middlewear");
    schema.parse(req.body);
    next();
  } catch (error) {
    const errMsg = error.errors.map((item) => item.message);
    const errTxt = errMsg.join(",");
    const mergeError = new Error(errTxt);
    next(mergeError);
  }
};
```
and then update code
/routes/auth-routes.js
```js
const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controllers");
const { validateWithZod, registerSchema, loginSchema } = require("../middlewears/validator");

// @ENDPOINT http://localhost:8003/api/register
router.post(
  "/register",
  validateWithZod(registerSchema),
  authControllers.register
);
router.post("/login", validateWithZod(loginSchema),authControllers.login);

//export
module.exports = router;
```

## Step 10 Create Database
Install Prisma
```bash
npx prisma migrate dev --name init
```

.env
```bash
DATABASE_URL="mysql://root:@Paul1710@localhost:3306/landmark"
```

/prisma/schema.prisma
```js
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Profile {
  id        Int      @id @default(autoincrement())
  email     String
  firstname String
  lastname  String
  role      Role     @default(USER)
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum Role {
  USER
  ADMIN
}
```
## Step 11  Config PrismaClient /bcryptjs hash password
/configs/prisma.js
```js
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = prisma;
```
update code
Register
/controllers/auth-controllers
```js
const prisma = require("../configs/prisma");
const createError = require("../utils/createError");
const bcrypt = require("bcryptjs");

exports.register = async (req, res, next) => {
  try {
    //code
    //Step 1 req.body
    const { email, firstname, lastname, password, confirmPassword } = req.body;
    //Step 2 validate
    //Step 3 Check already
    const checkEmail = await prisma.profile.findFirst({
      where: {
        email: email,
      },
    });
    console.log(checkEmail);
    if (checkEmail) {
      return createError(400, "Email is already exists!!!");
    }
    //Step 4 Encrypt bcrypt
    // const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log(hashedPassword);
    //Step 5 Insert to DB
    const profile = await prisma.profile.create({
      data: {
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: hashedPassword,
      },
    });
    //Step 6 Response
    res.json({ message: "Hello register" });
  } catch (error) {
    console.log("Step 2 Catch");
    next(error);
  }
};
```


## Step 12 
