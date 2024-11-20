const db = require("../prisma/queries.js");

async function allCharactersGet (req, res) {
    const coords = await db.findAllCharacters();
    console.log(coords)
    console.log(typeof coords[0].x)
    res.json(coords);
    
}




module.exports = {
    allCharactersGet,
    characterCheck
};