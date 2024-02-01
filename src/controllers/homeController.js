const connection = require('../config/database')
const { getAllUser, getUserById, updateUserById, deleteUserById } = require('../services/crudServices.js')

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

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId)
    res.render("editUsers.ejs", { userEdit: user })
}
const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myName;
    let city = req.body.city;
    let userId = req.body.userId;
    await updateUserById(email, city, name, userId)
    res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId)
    res.render("deleteUsers.ejs", { userEdit: user })
}
const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;
    await deleteUserById(id);
    res.redirect('/');
}

module.exports = {
    getHomepage,
    getLongPage,
    getCreatePage,
    getUpdatePage,
    postCreateUser,
    postDeleteUser,
    postUpdateUser,
    postHandleRemoveUser
}