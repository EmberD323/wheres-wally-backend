const db = require("../prisma/queries.js");

async function allCharactersGet (req, res) {
    const coords = await db.findAllCharacters();
    res.json(coords);
}
async function characterCheck (req, res) {
    const {x,y} = req.body
    console.log(x,y)
    const character = await db.findCharacter(Number(x),Number(y));
    console.log(character)
    res.json(character);

}




module.exports = {
    allCharactersGet,
    characterCheck
};