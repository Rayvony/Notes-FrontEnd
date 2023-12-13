const express = require("express");
const { registerUser } = require("../controllers/userController");
const { loginUser, updatePassword } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/updatepassword", updatePassword);

module.exports = router;
