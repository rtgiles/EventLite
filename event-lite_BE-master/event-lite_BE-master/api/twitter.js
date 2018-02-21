let Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'BqltzwfnkpvX0t35iBKwhA9ra',
  consumer_secret: 'yP6zWuA3oZXJqRvPX59ddK2VVTsG4zz1pIITriC2pyuqxtE1yS',
  access_token_key: '924337587946483714-baWfdwaiFDXMdIC5Rl3Fxn3wYBzpAY3',
  access_token_secret: 'vX4LPoxrHQjw0PhNHDJkW9FDyr1ubyi41ZQ4zopQYUmGT'
});

var myTweets = [];

function getTweets(callback, keyWord, res){
    client.get('search/tweets', {q: keyWord}, function(error, tweets, response) {
        for(var i = 0; i < 10; i++){
            myTweets[i] = tweets.statuses[i].text; 
        }
        callback(myTweets, res);
    });
}

module.exports = getTweets;