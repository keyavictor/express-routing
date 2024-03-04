// routes/index.js
const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');

module.exports = (app) => {
    // Home route
    app.get('/', homeController.getHomePage);

    // Authentication routes
    app.get('/login', authController.getLoginPage);
    app.post('/login', authController.loginUser);

    app.get('/register', authController.getRegisterPage);
    app.post('/register', authController.registerUser);
};
