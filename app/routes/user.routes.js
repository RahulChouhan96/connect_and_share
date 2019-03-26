const express = require("express");

let userCtrl = require("../controllers/user.controller");
let router = express.Router();

// Searches a user using their "userId" field
router
    .route("/get_one_user")
    .post(userCtrl.getOneUser);

// Deletes User Profile
router
    .route("/delete_one_user")
    .post(authCtrl.deleteOneUser);

module.exports = router;