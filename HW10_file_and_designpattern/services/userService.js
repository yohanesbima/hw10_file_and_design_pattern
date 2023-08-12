const UserRepository = require("../repositories/userRepository.js")

// Menjalankan Bisnis Logic

class UserService {
    static findAll = async (params, next) => {
        try {
            const user = await UserRepository.findAll(params, next);
            return user
        } catch (err) {
            next(err)
        }
    }

    static findOne = async (params) => {
        try {
            const { id } = params;
            const user = await UserRepository.findOne(id);
            return user
        } catch (err) {
            console.log(err, "<<<<")
        }
    }

    static create = async (params) => {
        try {
            const { email, gender, password, role } = params;
            let payload = {
                email,
                gender,
                password,
                role
            }

            const user = await UserRepository.create(payload)
            return user;

        } catch (err) {
            console.log(err, "<<<< Error")

        }
    }

    static update = async (pathParams, params) => {
        try {
            const { id } = pathParams;

            const { email, gender, password, role } = params;
            let payload = {
                email,
                gender,
                password,
                role
            }
            const user = await UserRepository.update(id, payload)
            return user

        } catch (err) {

        }
    }

    static destroy = async (params) => {
        try {
            const { id } = params;
            const user = await UserRepository.destroy(id);
            return user
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = UserService