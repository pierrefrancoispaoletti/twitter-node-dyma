const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pef:pef@cluster0.ylkjb.mongodb.net/twitter?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology:true
}).then(() => {
    console.log('connexion db ok');
    
});