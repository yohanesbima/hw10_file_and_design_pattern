const MovieRepository = require("../repositories/movieRepository.js")

// Menjalankan Bisnis Logic

class MovieService {
    static findAll = async (params, next) => {
        try {
            const movies = await MovieRepository.findAll(params, next);
            return movies
        } catch (err) {
            next(err)
        }
    }

    static findOne = async (params) => {
        try {
            const { id } = params;
            const movie = await MovieRepository.findOne(id);
            return movie
        } catch (err) {
            console.log(err, "<<<<")
        }
    }

    static create = async (fileImage, params) => {
        try {
            const { title, genres, year } = params;
            let payload = {
                title,
                genres,
                year
            }

            if (fileImage) {
                // console.log(fileImage, "<<<<<")
                let linkImage = `http://localhost:3000/${fileImage.filename}`
                payload.image = linkImage;
            }

            const movie = await MovieRepository.create(payload)
            return movie;

        } catch (err) {
            console.log(err, "<<<<")
        }
    }

    static update = async (pathParams, fileImage, params) => {
        try {
            const { id } = pathParams;

            const { title, genres, year } = params;
            let payload = {
                title,
                genres,
                year
            }

            if (fileImage) {
                // console.log(fileImage, "<<<<<")
                let linkImage = `http://localhost:3000/${fileImage.filename}`
                payload.image = linkImage;
            }
            const movie = await MovieRepository.update(id, payload)
            return movie

        } catch (err) {

        }
    }

    static destroy = async (params) => {
        try {
            const { id } = params;
            const movie = await MovieRepository.destroy(id);
            return movie
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = MovieService