const connection = require('../config/database')

const getHomepage = (req, res) => {
    let user = [];
    connection.query(
        'select * from User u',
        function (err, rs, fields) {
            user = rs
            console.log('Result', rs)
            res.send(JSON.stringify(user))
        }
    )
}

const getLongPage = (req, res) => {
    res.render("sample.ejs");
}


module.exports = {
    getHomepage,
    getLongPage,
}