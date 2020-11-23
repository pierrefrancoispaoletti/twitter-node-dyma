const router = require('express').Router();
const tweets = require('./tweets');

router.use('/tweet', tweets)

router.get('/', (req,res) => {
    res.redirect('/tweet')
});

module.exports = router;