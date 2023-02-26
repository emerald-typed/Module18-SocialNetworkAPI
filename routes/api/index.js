const router = require('express').Router();
const userRoute = require('./userRoute');
// const email = require('./emailRoutes');
// const thoughts = require('./thoughtRoutes');
// const friends = require('./friendRoutes');

router.use('/users', userRoute);
// router.use('/email', email);
// router.use('/thoughts', thoughts);
// router.use('/friends', friends);
module.exports = router;