Chatrooms.allow({
  /*  users are able to add messages to a chatroom */
  'update': function (userId, doc) {

    /* unsecure change later! */
    return true;
  }
});