$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()


  function initialize() {
    var myLatlng = new google.maps.LatLng(37.758297, -122.425701);
    var mapOptions = {
      zoom: 12,
      center: myLatlng,
      minZoom:12
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Hello World!'
    });

  }
  google.maps.event.addDomListener(window, 'load', initialize);
});


