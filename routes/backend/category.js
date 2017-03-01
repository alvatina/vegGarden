/**
 * Created by nguye on 3/1/2017.
 */
var router = require('express').Router();
var Category = require('../../models/Category');

router.get('/', function (req, res, next) {
    Category.find({}).exec(function (err, data) {
        if(err) return next(err);
        return next(data);
    })
});
router.post('/', function (req, res, next) {
    var tag = new Category({
        name: req.body.name,
        description: req.body.description
    });
    tag.save(function (err) {
        if(err) return next(err);
        return next('OK');
    });
});

router.put('/:id', function (req, res, next) {
    Category.findByIdAndUpdate(req.params.id,{
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
    Category.findByIdAndRemove(req.params.id, function (err) {
        if(err) return next(err);
        return next('OK')
    })
});
module.exports=router;