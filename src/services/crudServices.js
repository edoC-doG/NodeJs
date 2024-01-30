const connection = require("../config/database")

const getAllUser = async () => {
    let [result, fields] = await connection.query('SELECT * FROM Users')
    return result
}

module.exports = {
    getAllUser
}