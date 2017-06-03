/**
 * Created by obito on 19/05/17.
 */
var router = require('express').Router();

router.use('/', require('./static'));
router.use('/api', require('./api'));
router.use('/api2', require('./api2'));

module.exports = router;