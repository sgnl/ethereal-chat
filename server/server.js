if (Meteor.isServer) {
  Meteor.startup(function () {
    // Create twitter api instance
    Twitter = new TwitMaker(Meteor.settings.twitterAPI);

    // Clear trends on startup
    Trends.remove({});
    Chatrooms.remove({});

    // Fetch current trends
    insertTrends();
  });
}
