const prisma = require("../configs/prisma")
// 1. List all users
// 2. Update Role
// 3. Delete User


exports.listUser = async (req, res, next) => {
    try {
        const users = await prisma.profile.findMany({
            // select : {
            //     id : true,
            //     email : true,
            //     firstname : true,
            //     lastname : true,
            //     role : true,
            //     createdAt : true,
            //     updatedAt : true,
            // },
            omit : {
                password : true
            }
        })
        // console.log(users)
        res.json({result : users})
    } catch (err) {
        next(err)
    }
}

exports.updateRole = async (req, res, next) => {
    try {
        const {id, role} = req.body
        console.log(id ,role)
        const updated = await prisma.profile.update({
            where : {
                id : Number(id)
            },
            data : {
                role : role
            }
        })
        res.json({message : "Update Success"})
    } catch (err) {
        next(err)
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        const {id} = req.params
        const deleted = await prisma.profile.delete({
            where : {
                id : Number(id)
            }
        })
        console.log(deleted)
        res.json({message : "Delete Success"})
    } catch (err) {
        next(err)
    }
}