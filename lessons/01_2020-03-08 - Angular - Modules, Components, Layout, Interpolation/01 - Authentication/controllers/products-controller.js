const express = require("express");
const router = express.Router();


// Route accessed for everyone: 
router.get("/free", (request, response) => {
    try {
        // Get products from the database: 
        const products = [{ id: 1, name: "Apple", price: 3.5 }, { id: 2, name: "Banana", price: 4.5 }, { id: 3, name: "Peach", price: 5.5 }];
        response.json(products);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Route accessed only for logged-in users: 
router.get("/paid", (request, response) => {
    try {

        // If user didn't log-in: 
        if (!request.session.isLoggedIn) {
            response.status(403).send("Access Denied! Please Log-In!");
            return;
        }

        // Get products from the database: 
        const products = [{ id: 4, name: "Orange", price: 6.5 }, { id: 5, name: "Grapes", price: 7.5 }, { id: 6, name: "Cherry", price: 8.5 }];
        response.json(products);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// Route accessed only for the admin: 
router.get("/deleted", (request, response) => {
    try {

        // If user isn't admin: 
        if (request.session.role !== "Admin") {
            response.status(403).send("Access Denied! You are not Admin!");
            return;
        }

        // Get products from the database: 
        const products = [{ id: 7, name: "Avocado", price: 9.5 }, { id: 8, name: "Tomatoes", price: 10.5 }, { id: 9, name: "Pineapple", price: 11.5 }];
        response.json(products);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;
