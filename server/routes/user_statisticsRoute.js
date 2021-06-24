const Router = require('express');
const router = new Router();
const userStatisticController = require('../controllers/userStatisticsController');

router.get('/getStatisticByDate/:id', userStatisticController.getUserStaticsByDate);
router.get('/user_data', userStatisticController.getAllUserData)
router.get('/getFirstWeekDate/:id', userStatisticController.getFirstWeekDate)


module.exports = router;
