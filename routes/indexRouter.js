const { Router } = require("express");
const indexRouter = Router();
const characterController = require("../controllers/characterController");

indexRouter.get("/characters", characterController.allCharactersGet);//tested


module.exports = indexRouter;
