Meteor.startup(function () {
  if (Hashtags.find().count() === 0) {
    var trendingHashtags = [
      {
        hashtag: '#selfie'
      },
      {
        hashtag: '#builtwithmeteor'
      },
      {
        hashtag: '#devleague'
      }
    ];
    for (var i = 0; i < trendingHashtags.length; i++){
      Hashtags.insert(trendingHashtags[i]);
    }
  }
});