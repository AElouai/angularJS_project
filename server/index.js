/**
 * Created by obito on 19/05/17.
 */
var router = require('express').Router();

router.use('/', require('./static'));
router.use('/api', require('./api'));

module.exports = router;