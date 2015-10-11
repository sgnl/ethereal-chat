Meteor.startup(function () {
  // Create twitter api instance
  Twitter = new TwitMaker(Meteor.settings.twitterAPI);

  var MyCron = new Cron();
  MyCron.addJob(Meteor.settings.updateTimer, updateChatrooms);

  updateChatrooms();

});
