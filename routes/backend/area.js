/**
 * Created by nguye on 3/1/2017.
 */
var router = require('express').Router();
var Area = require('../../models/Area');

router.get('/', function (req, res, next) {
    Area.find({}).exec(function (err, data) {
        if(err) return next(err);
        return next(data);
    })
});
router.post('/', function (req, res, next) {
    var tag = new Area({
        name: req.body.name,
        description: req.body.description
    });
    tag.save(function (err) {
        if(err) return next(err);
        return next('OK');
    });
});

router.put('/:id', function (req, res, next) {
    Area.findByIdAndUpdate(req.params.id,{
        $set:{
            name: req.body.name,
            description: req.body.description
        }
    }, function (err, data) {
        if(err) return next(err);
        return next('OK');
    })
});
router.delete('/:id', function (req, res, next) {
    Area.findByIdAndRemove(req.params.id, function (err) {
        if(err) return next(err);
        return next('OK')
    })
});
module.exports=router;