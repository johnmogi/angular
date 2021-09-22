const express = require("express");
const authLogic = require("../business-logic/auth-logic");
const router = express.Router();

router.post("/register", (request, response) => {
    // Save new user to the database (if username not exist)
});


// Log-in: 
router.post("/login", (request, response) => {
    try {

        // Check in database if user exist: 
        const username = request.body.username;
        const password = request.body.password;
        const user = authLogic.isUserExist(username, password);
        if (!user) {
            response.status(403).send("Incorrect username or password");
            return;
        }

        // Save in the session that user is logged in, and user's role: 
        request.session.isLoggedIn = true;
        request.session.role = user.isAdmin ? "Admin" : "User";

        response.json(user);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Log-out: 
router.post("/logout", (request, response) => {
    try {
        request.session.destroy();
        response.send();
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});


module.exports = router;
