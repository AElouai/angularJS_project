/**
 * Created by obito on 19/05/17.
 */
var express = require('express');
var router  = express.Router();

router.use(express.static(__dirname + '/../bower_components'));
router.use(express.static(__dirname + '/../app'));
router.use(express.static(__dirname + '/../assets'));
router.use('/templates', express.static(__dirname + '/../templates'));
// router.use(express.static(__dirname + '/../node_modules'));


router.get('/', function (req, res) {
    res.sendfile('index.html');
});

module.exports = router;