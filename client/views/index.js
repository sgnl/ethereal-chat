Template.index.helpers({
  'chatrooms': function(){
    return Chatrooms.find();
  },
  'hashtags': function(){
    return Hashtags.find();
  }
});

Template.index.events({

});