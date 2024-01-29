const connection = require('../config/database')
const getHomepage = (req, res) => {
    return res.render('homePage.ejs')
}
const getLongPage = (req, res) => {
    res.render("sample.ejs");
}
const postCreateUser = (req, res) => {
    // let { email, name, city } = req.body
    let email = req.body.email;
    let name = req.body.myName;
    let city = req.body.city;
    connection.query(
        `INSERT INTO Users(email, name, city) 
        VALUES (?,?,?)`,
        [email, name, city],
        function (err, result) {
            console.log(result)
            res.send('Create a new user')
        }
    )
}

module.exports = {
    getHomepage,
    getLongPage,
    postCreateUser
}