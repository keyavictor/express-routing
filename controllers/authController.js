// controllers/authController.js
const UserModel = require('../models/user');

// For demonstration purposes, we use in-memory data structures.
const users = [];

exports.getLoginPage = (req, res) => {
    res.render('login', { title: 'Login' });
};

exports.loginUser = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.render('home', { title: 'Express EJS App', message: `Welcome, ${user.getName()}!` });
    } else {
        res.render('login', { title: 'Login', error: 'Invalid username or password' });
    }
};

exports.getRegisterPage = (req, res) => {
    res.render('register', { title: 'Register' });
};

exports.registerUser = (req, res) => {
    const { username, password, name } = req.body;
    const existingUser = users.find(u => u.username === username);

    if (existingUser) {
        res.render('register', { title: 'Register', error: 'Username already exists' });
    } else {
        const newUser = new UserModel(username, password, name);
        users.push(newUser);
        res.render('home', { title: 'Express EJS App', message: `Welcome, ${newUser.getName()}!` });
    }
};
