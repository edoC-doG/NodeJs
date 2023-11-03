const getHomepage = (req, res) => {
    res.send('Hello Controller')
}

const getLongPage =(req, res ) => {
    res.render("sample.ejs");
}


module.exports = {
    getHomepage,
    getLongPage,
}