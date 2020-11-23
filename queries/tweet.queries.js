const { findOneAndUpdate } = require("../database/models/tweet.model");
const Tweet = require("../database/models/tweet.model");

exports.findAllTweets = () => {
    return Tweet.find({}).exec();
}

exports.createTweet = (tweet) => {
    const newTweet = new Tweet({...tweet});
    return newTweet.save();
}

exports.tweetDelete = (tweetId) => {
    return Tweet.findByIdAndDelete(tweetId).exec()
}

exports.getTweet = (tweetId) => {
    return Tweet.findOne({_id: tweetId}).exec();
}

exports.tweetUpdate = (tweetId, tweetContent) => {
    return Tweet.findOneAndUpdate(tweetId, {content: tweetContent}, { runValidators: true }).exec();
}