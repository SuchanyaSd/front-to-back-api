// 1. List all users
// 2. Update Role
// 3. Delete User

exports.listUser = async (req, res, next) => {
    try {
        res.json({message : "Hello, List users"})
    } catch (err) {
        next(err)
    }
}

exports.updateRole = async (req, res, next) => {
    try {
        res.json({message : "Hello, Update Role"})
    } catch (err) {
        next(err)
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        res.json({message : "Hello, Delete User"})
    } catch (err) {
        next(err)
    }
}