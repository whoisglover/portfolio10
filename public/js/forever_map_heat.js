$(document).ready(function() {

  function initialize() {
    // view = new View;
    var myLatlng = new google.maps.LatLng(37.758297, -122.425701);
    var mapOptions = {
      zoom: 12,
      center: myLatlng,
      minZoom:12
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    $('#map-canvas').fadeIn(700)
    crimeData = []
    console.log('HEYYYY')
    var ajaxRequest = $.ajax({
      type: 'GET',
      url: '/all'
    })
    result = ajaxRequest.done(function(data){
      crime = JSON.parse(data)
      console.log(crime[50])
      for(var i=0; i<crime.length; i++){
        var myLatlng = new google.maps.LatLng(crime[i]['yCoord'], crime[i]['xCoord']);
        crimeData.push(myLatlng)
      }

      var pointArray = new google.maps.MVCArray(crimeData);

      heatmap = new google.maps.visualization.HeatmapLayer({
        data: pointArray
      });

      heatmap.setMap(map)

      heatmap.set('radius', heatmap.get('radius') ? null : 15);
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);

});


