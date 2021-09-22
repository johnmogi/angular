function isUserExist(username, password) {

    // Get user from the database: 
    // "SELECT * FROM Users WHERE Username = '____' AND Password = '____'"

    if (username == "Moishe" && password == "1234") {
        const user = { username, password, isAdmin: false };
        return user;
    }

    if (username == "Kipi" && password == "5678") {
        const user = { username, password, isAdmin: true };
        return user;
    }

    return null;
}

module.exports = {
    isUserExist
};