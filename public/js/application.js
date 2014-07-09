$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()


  function initialize() {
    // view = new View;
    var myLatlng = new google.maps.LatLng(37.758297, -122.425701);
    var myLatlng2 = new google.maps.LatLng(37.782631, -122.407733);

    var mapOptions = {
      zoom: 12,
      center: myLatlng,
      minZoom:12
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    markers = []

    var ajaxRequest = $.ajax({
      type: 'GET',
      url: '/crimes/100'
    })
    result = ajaxRequest.done(function(data){
      crime = JSON.parse(data)
      console.log(crime[50])
      for(var i=0; i<crime.length; i++){
        var myLatlng = new google.maps.LatLng(crime[i]['yCoord'], crime[i]['xCoord']);
        var marker = new google.maps.Marker({
          position: myLatlng,
          // map: map,
          // animation: google.maps.Animation.DROP,
          title: crime[i]['description']
        });
        markers.push(marker);
      }
    var markerCluster = new MarkerClusterer(map, markers);

    });

  }
  google.maps.event.addDomListener(window, 'load', initialize);
});


