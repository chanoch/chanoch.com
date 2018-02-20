
var router = require('express').Router();

router.get('/api/v1/recipes/', (req,res) => {
    if(req.app.locals.db) {
        req.app.locals.db.collection('recipes').find({}).toArray(function(err, docs) {
            if(err) {
                res.status(500).json({'message': `Error: ${err.message}`});
            } else {
                res.json(docs);
            }
        });
    } else {
        res.status(500).json({'message': 'No database connection'});
    }
});
    
module.exports = router;