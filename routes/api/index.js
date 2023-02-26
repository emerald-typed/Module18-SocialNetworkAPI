const router = require('express').Router();
const userRoute = require('./userRoute');
const mindRoute = require('./mindRoute');

router.use('/users', userRoute);
router.use('/thoughts', mindRoute);
module.exports = router;