const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tweetSchema= schema({
   content: { 
      type: String,
      maxlength: [140, 'tweet trop long'], 
      minlength: [1, 'tweet trop court'], 
      required: [true, 'champ requis' ],
   }
},{timestamps: true});

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;