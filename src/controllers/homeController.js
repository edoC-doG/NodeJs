const connection = require('../config/database')
const { getAllUser } = require('../services/crudServices.js')


const getHomepage = async (req, res) => {
    let result = await getAllUser()
    return res.render('homePage.ejs', { listUsers: result })
}
const getLongPage = (req, res) => {
    res.render("sample.ejs");
}
const getCreatePage = (req, res) => {
    res.render("createUsers.ejs")
}
const postUpdateUser = async (req, res) => {
    res.render("editUsers.ejs")
}
const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myName;
    let city = req.body.city;
    let [result, fields] = await connection.query(
        `INSERT INTO Users(email, name, city) VALUES (?,?,?)`,
        [email, name, city])
    res.send('Create a new user')
    // connection.query(
    //     `INSERT INTO Users(email, name, city) 
    //     VALUES (?,?,?)`,
    //     [email, name, city],
    //     function (err, result) {
    //         res.send('Create a new user')
    //     }
    // )
}

module.exports = {
    getHomepage,
    getLongPage,
    getCreatePage,
    postCreateUser,
    postUpdateUser
}