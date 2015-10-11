/**
 * Load trends into collection
 * @params woeid - Location to pull in trends from
 */
insertTrends = function insertTrends (woeid) {
  var DEFAULT_WOEID = 1; //Global
    Twitter.get('trends/place', { id: woeid || DEFAULT_WOEID }, Meteor.bindEnvironment(function (err, data, response) {
      if (err) {
        // Render 404 page? Waiting, idk?
      }
      var trends = data[0].trends;
      for (var i = 0 ; i < trends.length; i++) {
        var currentTrend = trends[i];
        currentTrend.roomUrl = '/room/' + encodeURIComponent(currentTrend.name);
        Trends.insert(currentTrend);
        createChatroom({ name: currentTrend.name });
      }
    }),function () { console.error('Failed to bind environment'); });
};

function createChatroom (chatOptions) {
  Chatrooms.insert({ name: chatOptions.name, entries: [] });
}
