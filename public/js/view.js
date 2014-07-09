var View = function(){}

View.prototype = {
  createMarkers: function(map){
    var myLatlng = new google.maps.LatLng(37.758297, -122.425701);
    var myLatlng2 = new google.maps.LatLng(37.782631, -122.407733);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Hello World!'
    });
    var marker2 = new google.maps.Marker({
      position: myLatlng2,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Hello World!'
    });
  }
}