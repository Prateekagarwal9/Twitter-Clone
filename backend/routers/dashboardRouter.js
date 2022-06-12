const express = require('express');
const router = express.Router({
    mergeParams: true
});
const dashboardController = require('../controllers/dashboardController');

// Log Time
router.use(function timeLog(req, res, next) {
    next();
});


router.post('/gettweetpage', dashboardController.tweetPage);
router.post('/getuserwithoutdetail', dashboardController.getUser);
router.post('/getuserwithdetails', dashboardController.getUserWithDetails);
router.post('/updateuser', dashboardController.updateUser);
router.post('/newtweet', dashboardController.newTweet);


module.exports = router;