var express = require('express');
var router = express.Router();
var arr = [];
var num = 0;

/* GET-contacts */
router.get('/:id', function (req, res, next) {
    res.json(arr[req.params.id]);
});
/*POST-contacts*/
router.post('/', function (req, res, next) {
    arr[num++] = req.body;
    res.json(num-1);
});
/*PUT-contacts*/
router.put('/:id', function (req, res, next) {
    arr[req.params.id].firstName = req.body.firstName;
    return res.json(arr[req.params.id]);
});

module.exports = router;