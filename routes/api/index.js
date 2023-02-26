const username = require('./userRoutes');
const email = require('./emailRoutes');
const thoughts = require('./thoughtRoutes');
const friends = require('./friendRoutes');

router.use('/users', username);
router.use('/email', email);
router.use('/thoughts', thoughts);
router.use('/friends', friends);
