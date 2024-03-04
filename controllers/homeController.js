// controllers/homeController.js

exports.getHomePage = (req, res) => {
    res.render('home', { title: 'Express EJS App', message: 'Welcome to the home page!' });
};
