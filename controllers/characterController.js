const db = require("../prisma/queries.js");

async function allCharactersGet (req, res) {
    const coords = await db.findAllCharacters();
    console.log(coords)
    console.log(typeof coords[0].x)
    res.json(coords);
    
}
async function characterCheck (req, res) {
    const {x,y} = req.body
    const character = await db.findCharacter(Number(x),Number(y));
    res.json(character);

}




module.exports = {
    allCharactersGet,
    characterCheck
};