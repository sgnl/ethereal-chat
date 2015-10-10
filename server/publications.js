Meteor.publish('chatrooms', function(){
  return Chatrooms.find();
});


// server side only?
Meteor.publish('hashtags', function(){
  return Hashtags.find();
});