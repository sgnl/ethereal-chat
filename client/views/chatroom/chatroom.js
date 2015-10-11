// Already in blaze template instance
Template.chatroom.created = function () {
};

Template.chatroom.rendered = function () {

};

Template.chatroom.events({
  'submit form': function (evt, tmpl) {
    evt.preventDefault();
    var form = evt.target;
    var newMessage = {
      timestamp: Date.now(),
      message: form.message.value,
      isTweet: false
    };
    var chatroom = Chatrooms.findOne({name: Session.get(App.CHATROOM_NAME)});
    Chatrooms.update(chatroom._id, {$push: { entries: newMessage }});
    form.reset();
  },
  'click #exitChatroom': function(evt, tmpl) {
    Session.set(App.CHATROOM_NAME, false);
  }
});

Template.chatroom.helpers({
  name: function() {
    return Chatrooms.findOne({name: Session.get(App.CHATROOM_NAME)}).name;
  },
  entries: function() {
    return Chatrooms.findOne({name: Session.get(App.CHATROOM_NAME)}).entries;
  }
});


// Already in blaze template instance
Template.tweet.created = function () {
};

Template.tweet.rendered = function () {
};

// Already in data context
Template.tweet.helpers({
  timestamp: function () { return moment(this.timestamp).fromNow(); }
});

// Already in blaze template instance
Template.message.created = function () {
};

Template.message.rendered = function () {
};

// Already in data context
Template.message.helpers({
  timestamp: function () { return moment(this.timestamp).fromNow(); }
});
