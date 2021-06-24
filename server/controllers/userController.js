const db = require('../DataBase/db');

class UserController {
    async getUsers(req, res) {
        const getUsers = `SELECT * FROM users`;
        db.all(getUsers, (err, row) => {
            if (err) {
                console.log('Query error: ' + err)
            } else {
                return res.json(row)
            }
        })
    }

    async getUserById(req, res) {
        const { id } = req.params
        const getUserById = `SELECT *
                                       FROM users
                                       WHERE id = ${id}`
        db.all(getUserById, (err, row) => {
            if (err) {
                console.log(err)
            } else {
                return res.json(row)
            }
        })
    }
}

module.exports = new UserController()