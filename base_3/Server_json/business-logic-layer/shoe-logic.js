const fs = require("fs");

const fileName = "./data-access-layer/formData.json";

function getAllShoesAsync() {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf-8", (err, shoes) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(JSON.parse(shoes));
        });
    });
}

function saveAllShoesAsync(shoes) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, JSON.stringify(shoes, null, 4), err => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}


async function addShoeAsync(Shoe) {
    const allShoes = await getAllShoesAsync();
    Shoe.id = allShoes.length + 1;
    allShoes.push(Shoe);
    await saveAllShoesAsync(allShoes);
    return Shoe;
}


module.exports = {
    getAllShoesAsync,
    saveAllShoesAsync,
    addShoeAsync
};