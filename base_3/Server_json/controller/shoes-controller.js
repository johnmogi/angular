const express = require("express");
const ShoesLogic = require("../business-logic-layer/shoe-logic");
const ShoeModel = require("../models/shoe-model");

const router = express.Router();


// GET http://localhost:3000/api/shoes
router.get("/", async (request, response) => {
    try {
        const shoes = await ShoesLogic.getAllShoesAsync();
        response.json(shoes);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});


// // POST http://localhost:3000/api/shoes
// router.post("/", async (request, response) => {
//     try {
//         const shoe = request.body;
//         if( !shoe.code ||!shoe.model ||!shoe.price || !shoe.imageFile){
//             response.status(401).send("missing a field, try again")
//             throw("missing a field, try again")
//         }
//         const errors = ShoeModel.validate(shoe);
//         if (errors) {
//             response.status(400).send(errors);
//             return;
//         }

//         const addedShoe = await ShoesLogic.addShoeAsync(shoe);
//         response.status(201).json(addedShoe);
//     }
//     catch (err) {
//         response.status(500).send(err.message);
//     }
// });

module.exports = router;