
var router = require('express').Router();

router.get('/api/v1/recipes/', (req,res) => {
    console.log(req.app.locals.db);
    req.app.locals.db.collection('recipes').find({}).toArray(function(err, docs) {
        if(err) {
            res.error(err);
        } else {
            res.json(docs);
        }
    })
});
    
module.exports = router;