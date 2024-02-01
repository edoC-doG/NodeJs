const connection = require("../config/database")

const getAllUser = async () => {
    let [result, fields] = await connection.query('SELECT * FROM Users')
    return result
}
const getUserById = async (userId) => {
    let [result, fields] = await connection.query('SELECT * FROM Users WHERE id = ? ', [userId])
    let user = result && result.length > 0 ? result[0] : {}
    return user
}

const updateUserById = async (email, city, name, userId) => {
    let [result, fields] = await connection.query(
        `UPDATE Users 
        SET email = ?, city = ?, name = ?
        WHERE id = ?`,
        [email, city, name, userId])
}

const deleteUserById = async (id) => {
    let [result, fields] = await connection.query(`DELETE FROM Users WHERE id = ? `, [id])
}
module.exports = {
    getAllUser,
    getUserById,
    updateUserById,
    deleteUserById
}