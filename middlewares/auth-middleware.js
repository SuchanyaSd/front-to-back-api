const createError = require("../utils/createError")
const jwt = require("jsonwebtoken")

exports.authCheck = async (req, res, next) => {
    try {
        // รับ header จาก client
        const authorization = req.headers.authorization
        // check ถ้าไม่มี token
        if (!authorization) {
            return createError(400, "Missing Token!!!")
        }
        // Bearer token ....... ใช้ split(" ") แบ่งด้วยช่องว่าง
        const token = authorization.split(" ")[1]
       
        // Verify token
        jwt.verify(token, process.env.SECRET, (err, decode)=>{
            console.log(err)
            console.log(decode)
            if (err) {
                return createError(401, "Unautorized!!")
            }
            // สร้าง property user = decode (ข้อมูล user จาก token)
            req.user = decode
            next()
        })

    } catch (err) {
        next(err)
    }
}