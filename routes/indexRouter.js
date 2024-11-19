const { Router } = require("express");
const indexRouter = Router();
const characterController = require("../controllers/characterController");

indexRouter.get("/characters", characterController.allCharactersGet);//tested
indexRouter.post("/character", characterController.characterCheck);//to be tested


module.exports = indexRouter;
