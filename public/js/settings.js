$(document).ready(function() {
  $('#settings-link').click(function(){
    event.preventDefault();
    $('#map-canvas').fadeOut();
    setTimeout(function(){
      $('.settings').fadeIn();
    }, 700);
  })
})
