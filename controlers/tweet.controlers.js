const {
  findAllTweets,
  createTweet,
  tweetDelete,
  getTweet,
  tweetUpdate,
} = require("../queries/tweet.queries");

exports.getTweets = async (req, res, next) => {
  try {
    const tweets = await findAllTweets();
    res.render("tweets/tweet", { tweets });
  } catch (e) {
    next(e);
  }
};

exports.showTweetsForm = (req, res) => {
  res.render("tweets/tweet-form", { tweet: {} });
};

exports.postTweet = async (req, res) => {
  try {
    await createTweet(req.body);
    res.redirect("/tweet");
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("tweets/tweet-form", { errors });
  }
};

exports.updateTweet = async (req, res, next) => {
    const tweetId = req.params.tweetId;
  try {
    const tweetContent = req.body.content;
    await tweetUpdate(tweetId, tweetContent);
    res.redirect("/tweet");
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    const tweet = await getTweet(tweetId);
    res.status(400).render("tweets/tweet-form", { errors, tweet });
  }
};

exports.editTweet = async (req, res, next) => {
  try {
    const tweetId = req.params.tweetId;
    const tweet = await getTweet(tweetId);
    res.render("tweets/tweet-form", { tweet });
  } catch (e) {
    next(e);
  }
};

exports.deleteTweet = async (req, res, next) => {
  try {
    const tweetId = req.params.tweetId;
    await tweetDelete(tweetId);
    const tweets = await findAllTweets();
    res.render("tweets/tweet-list", { tweets });
  } catch (e) {
    next(e);
  }
};
