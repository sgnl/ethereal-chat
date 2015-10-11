App = {
  CHATROOM_NAME: 'chatroomName'
};

Meteor.startup(function() {
  Session.setDefault(App.CHATROOM_NAME, false);
});
