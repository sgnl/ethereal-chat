/**
 * Load create chatrooms
 * @params woeid - Location to pull in trends from
 */
updateChatrooms = function updateChatrooms (woeid) {
  woeid =  woeid || 1; // default global trends
  getTrends(woeid, function (err, data, response) {
    if (err) {
      // Render 404 page? Waiting, idk?
      console.error(err);
      return;
    }
    var trends = data[0].trends;
    var chatrooms = Chatrooms.find({});

    var trendNames = trends.map(getName);
    var chatroomNames = chatrooms.map(getName);

    var remove = _.difference(chatroomNames, trendNames);
    var add = _.difference(trendNames, chatroomNames);
    Chatrooms.remove({name: { $in: remove } });

    for (var i = 0 ; i < add.length; i++) {
      var currentTrend = { name: add[i] };
      currentTrend.roomUrl = '/room/' + encodeURIComponent(currentTrend.name);
      createChatroom(currentTrend);
    }
  });
};

getTrends = function getTrends(woeid, callback) {
  return Twitter.get('trends/place',
    { id: woeid || DEFAULT_WOEID },
    Meteor.bindEnvironment(callback,
    function () { console.error('Failed to bind environment'); })
  );
};

function createChatroom (chatOptions) {
  return Chatrooms.insert({ name: chatOptions.name, roomUrl: chatOptions.roomUrl, entries: [] });
}

function getName (thing) {
  return thing.name;
}
