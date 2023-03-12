const express = require("express");
const router = express.Router();
const {
    getUser, getUsers, addUser, deleteUser, editUser
} = require("../controllers/User.controller");

router.get("/", getUsers);
router.get("/:userId", getUser);
router.post("/", addUser);
router.put("/:userId", editUser);
router.delete("/:userId", deleteUser);

module.exports = router;
