const { Router } = require("express");
const indexRouter = Router();
const characterController = require("../controllers/characterController");

indexRouter.get("/characters", characterController.allCharactersGet);//tested
indexRouter.get("/scores", characterController.allScoresGet);//tested
indexRouter.post("/scores", characterController.postScore);//tested



module.exports = indexRouter;
