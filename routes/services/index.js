/**
 * Created by nguye on 2/28/2017.
 */
var router = require('express').Router();

router.get('/', function (req, res, next) {
    res.end('200');
});
module.exports = router;