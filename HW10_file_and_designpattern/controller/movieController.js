const MovieService = require("../services/movieService.js")


class MovieController {

    static findAll = async (req, res, next) => {
        try {
            const movies = await MovieService.findAll(req.query, next)

            return res.status(200).json(movies)
        } catch (err) {
            next(err)
        }
    }
    static findOne = async (req, res, next) => {
        try {
            const movies = await MovieService.findOne(req.params);
            if (!movies) {
                throw { name: "ErrorNotFound" }
            }
            return res.status(200).json(movies)
        } catch (err) {
            next(err)
        }

    }
    static create = async (req, res, next) => {
        try {
            // req.file => file images
            // req.body => data movie
            console.log(req.file, req.body, "<<<<<")
            const movie = await MovieService.create(req.file, req.body)

            res.status(201).json({ message: "Movie Created Successfully" })
        } catch (err) {
            next(err)
        }

    }

    static update = async (req, res, next) => {
        try {
            const movie = await MovieService.update(req.params, req.file, req.body);
            res.status(200).json({ message: "Movie Update Successfully" })
        } catch (err) {
            next(err)
        }

    }

    static destroy = async (req, res, next) => {
        try {
            const movie = await MovieService.destroy(req.params)
            if (!movie) {
                throw { name: "ErrorNotFound" }
            }

            res.status(200).json({ message: "Movie Deleted Successfully" })
        } catch (err) {
            next(err)
        }


    }
}

module.exports = MovieController;