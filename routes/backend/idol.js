/**
 * Created by nguye on 3/1/2017.
 */
var router = require('express').Router();
var Idol = require('../../models/Idol');

router.get('/', function (req, res, next) {
    Idol.find({}, function (err, data) {
        if(err) return next(err);
        return next(data);
    })
});

router.get('/:id', function (req, res, next) {
    Idol.findById(req.params.id, function (err, data) {
        if(err) return next(err);
        return next(data);
    })
});

router.post('/', function (req, res, next) {
    var idol = new Idol({
        personal_id: req.body.personal_id,
        birthday: req.body.birthday,
        avatar: req.body.avatar,
        category: req.body.category,
        area: req.body.area,
        measurements: req.body.measurements,
        price: req.body.price,
        services: req.body.services,
        note: req.body.note,
        private_info: req.body.private_info
    });
    idol.save(function (err) {
        if(err) return next(err);
        return next('OK');
    })
})

router.put('/:id', function (req, res, next) {

})