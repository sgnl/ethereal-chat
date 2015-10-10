Twitter = new TwitMaker(Meteor.settings.twitterAPI);

Twitter.get('trends/place', { id: 1 }, function (err, data, response) {
  if (err) {
    // Render 404 page? Waiting, idk?
  }
  for (var i = 0 ; i < data.length; i++){
    console.log(data[i]);
    var trends = data[i].trends;
    console.log(trends);
  }
});
