const Router = require('express');
const router = Router();
const userRoute = require('./usersRoute');
const userStatisticRoute = require('./user_statisticsRoute');

router.use('/data', userRoute);
router.use('/data', userStatisticRoute);

module.exports = router;