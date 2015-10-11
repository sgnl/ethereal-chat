Template.index.helpers({
  'chatrooms': function(){
    return Chatrooms.find();
  },
  'trends': function(){
    return Trends.find();
  }
});

Template.roomItems.helpers({
  messages: function() {
    return _.last(Chatrooms.findOne({name: this.name}).entries, 4);
  }
});

Template.roomItems.events({
  'click .roomName': function (event, template) {
    event.preventDefault();

    Router.go(this.roomUrl);
  }
});
