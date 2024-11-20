const db = require("../prisma/queries.js");
const { body, validationResult } = require("express-validator");

const validateScore= [
    body("name").trim()
        .escape()
        .isAlphanumeric().withMessage(`Name must only contain letters or numbers`)
        .isLength({ min: 1, max: 20 }).withMessage(`Name must be between 1 and 20 characters.`),
    body("time").trim()
        .escape()
        .isNumeric().withMessage(`Time must be a number`),
];
async function allCharactersGet (req, res) {
    const coords = await db.findAllCharacters();
    res.json(coords);
}

async function allScoresGet (req, res) {
    const scores = await db.findAllScores();
    res.json(scores);
}
postScore = [
    validateScore,
    async function  (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array())
        }
        const time = Number(req.body.time);
        const name = req.body.name;
        await db.createScore(name,time);
        res.sendStatus(200);
    }
]


module.exports = {
    allCharactersGet,
    allScoresGet,
    postScore
};