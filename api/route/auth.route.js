const express = require("express");
const auth = require("./../controller/auth.controller")
const upload = require("../middleware/upload-middleware")
const router = express.Router();
const authToken = require('./../middleware/auth.middleware');


router.post('/signup',auth.signup,)
router.post('/login',auth.login)
router.post('/uploadImage', authToken.authenticateToken, upload.single("profilepic"), auth.Image);
router.get('/profile', authToken.authenticateToken, auth.users)
router.put('/settings', authToken.authenticateToken, auth.updateUser);
module.exports = router;
