Meteor.startup(function () {
  if (Hashtags.find().count() === 0) {
    var trendingHashtags = [
      {
        name: '#selfie'
      },
      {
        name: '#builtwithmeteor'
      },
      {
        name: '#devleague'
      }
    ];
    for (var i = 0; i < trendingHashtags.length; i++){
      Hashtags.insert(trendingHashtags[i]);
    }
  }
});