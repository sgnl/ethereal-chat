Meteor.startup(function () {
  if (Hashtags.find().count() === 0) {
    var trendingHashtags = [
      {
        name: '#selfie',
        chatUrl: '/room/selfie'
      },
      {
        name: '#builtwithmeteor',
        chatUrl: '/room/builtwithmeteor'
      },
      {
        name: '#devleague',
        chatUrl: '/room/devleague'
      }
    ];
    for (var i = 0; i < trendingHashtags.length; i++){
      Hashtags.insert(trendingHashtags[i]);
    }
  }
});