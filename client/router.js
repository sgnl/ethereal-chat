Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/', function(){
  this.render('index');
  // this.layout('indexLayout');
});
