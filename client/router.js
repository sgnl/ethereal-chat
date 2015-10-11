Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/', function(){
  this.render('index');
  // this.layout('indexLayout');
});

Router.route('/room/:chatroom', function(){
  this.render('chatroom', {
    data: function () {
      return Chatrooms.findOne({name: this.params.chatroom});
    }
  });
});
