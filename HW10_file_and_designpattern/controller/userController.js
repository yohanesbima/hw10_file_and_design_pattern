const UserService = require("../services/userService.js")


class UserController {

    static findAll = async (req, res, next) => {
        try {
            const user = await UserService.findAll(req.query, next)

            return res.status(200).json(user)
        } catch (err) {
            next(err)
        }
    }
    static findOne = async (req, res, next) => {
        try {
            const user = await UserService.findOne(req.params);
            if (!user) {
                throw { name: "ErrorNotFound" }
            }
            return res.status(200).json(user)
        } catch (err) {
            next(err)
        }

    }
    static create = async (req, res, next) => {
        try {
            // req.file => file images
            // req.body => data user
            // console.log(req.body, "<<<<< reqbody")

            const user = await UserService.create(req.body)

            res.status(201).json({ message: "User Created Successfully" })
        } catch (err) {
            next(err)
        }

    }

    static update = async (req, res, next) => {
        try {
            const user = await UserService.update(req.params, req.body);
            res.status(200).json({ message: "User Update Successfully" })
        } catch (err) {
            next(err)
        }

    }

    static destroy = async (req, res, next) => {
        try {
            const user = await UserService.destroy(req.params)
            if (!user) {
                throw { name: "ErrorNotFound" }
            }

            res.status(200).json({ message: "User Deleted Successfully" })
        } catch (err) {
            next(err)
        }


    }
}

module.exports = UserController;