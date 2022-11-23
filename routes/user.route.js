const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/", userController.getUserDetails);
//router.get("/add", userController.add);



module.exports = router;