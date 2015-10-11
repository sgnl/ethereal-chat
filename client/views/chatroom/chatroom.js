// Already in blaze template instance
Template.chatroom.created = function () {
};

Template.chatroom.rendered = function () {

};

// Already in data context
Template.chatroom.helpers({
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
