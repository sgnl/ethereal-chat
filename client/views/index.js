Template.index.helpers({
  'chatrooms': function(){
    return Chatrooms.find();
  },
  'trends': function(){
    return Trends.find();
  }
});

Template.roomItems.events({
  'click .roomName': function (event, template) {
    event.preventDefault();

    console.log(this.chatUrl);
    Router.go(this.chatUrl);
  }
});
