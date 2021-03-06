(function (){
  App.Helpers = {

    collision: function( itemA, itemB ) {
      var a = itemA.attributes,
        b = itemB.attributes;

      return a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y;
    },

    requestAnimFrame: function() {
      return (
          window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( callback ){
              window.setTimeout(callback, 1000 / 60);
          }
      );
    },

    verifyAttributes: function( attributes ) {
      if( !attributes || typeof attributes === undefined ) {
        return {};
      }

      return attributes;
    },

    random: function( min, max ) {
      return ~~( Math.random() * ( max - min + 1 ) ) + min;
    }

  };
}() );
