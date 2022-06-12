const express = require('express');
const router = express.Router({
    mergeParams: true
});
const authController = require('../controllers/authController');

// Log Time
router.use(function timeLog(req, res, next) {
    next();
});


router.post('/register', authController.registerController);
router.post('/login',authController.loginController)
module.exports = router;