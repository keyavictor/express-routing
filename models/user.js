// models/user.js

class UserModel {
    constructor(username, password, name) {
        this.username = username;
        this.password = password;
        this.name = name;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    getName() {
        return this.name;
    }
}

module.exports = UserModel;
