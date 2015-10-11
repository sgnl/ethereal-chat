Template.index.created = function() {
  Session.set(App.CHATROOM_NAME, false);
};

Template.index.helpers({
  showChatroom: function() {
    return Session.get(App.CHATROOM_NAME);
  },
  chatrooms: function() {
    return Chatrooms.find();
  },
  trends: function() {
    return Trends.find();
  }
});

Template.roomItems.helpers({
  messages: function() {
    return _.last(Chatrooms.findOne({name: this.name}).entries, 4);
  }
});

Template.roomItems.events({
  'click .join-chat': function (evt, tmpl) {
    Session.set(App.CHATROOM_NAME, this.name);
    $('body').toggleClass('disable-scroll');
  }
});
