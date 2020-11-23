const router = require('express').Router();
const { getTweets, showTweetsForm, postTweet, deleteTweet, editTweet, updateTweet } = require('../controlers/tweet.controlers');


router.get('/', getTweets);

router.get('/new', showTweetsForm);

router.get('/edit/:tweetId', editTweet)

router.post('/update/:tweetId', updateTweet);

router.post('/', postTweet);

router.delete('/:tweetId', deleteTweet);

module.exports = router;