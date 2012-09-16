$(function(){
  var game = new App.Game({
    canvas_container_id: 'game'
  });

  $('#stop').click(function() {
    game.stop()
  });

  window.game = game;

  game.addPlayer({
    name: 'Blake'
  });

  game.start();

  console.log('game', game);
});
