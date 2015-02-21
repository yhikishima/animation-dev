(function(){
  var transformsAnimate = [
    'skewY(-45deg) scale(.66)',
    'translate(20px) skewY(-45deg) scale(.66)'
  ];

  $('#js-square').mouseenter(function() {
      $(this).animate({transform: transformsAnimate[0]});
  }).mouseleave(function() {
      $(this).animate({transform: transformsAnimate[1]});
  });
})();
