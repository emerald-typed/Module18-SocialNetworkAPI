const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// router.use((req, res) => {
//   return res.send('Wrong route!').status(404);
// });

module.exports = router;