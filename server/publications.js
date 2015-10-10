Meteor.publish('chatrooms', function(){
  return Chatrooms.find();
});


// server side only?
Meteor.publish('trends', function(){
  return Trends.find();
});
