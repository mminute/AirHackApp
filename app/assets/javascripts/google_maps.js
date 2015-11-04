$(document).ready(function(){
  // Sets starting location/default location
  // should the user's location be unavailable.
  var defaultLocation = {
    center: new google.maps.LatLng(39.911105,-75.148058),
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  // Builds the map element
  var map = new google.maps.Map(document.getElementById("googleMap"), defaultLocation );
  // Finds the user's location and drops a pin
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      var foundLocation = new google.maps.LatLng( position.coords.latitude,position.coords.longitude );
      map.setCenter( foundLocation );

      var userIcon = "http://maps.google.com/mapfiles/ms/icons/blue.png"

      var userMarker = new google.maps.Marker({
        position: foundLocation,
        map: map,
        title: 'User Location\n' + String(foundLocation),
        animation: google.maps.Animation.DROP,
        icon: new google.maps.MarkerImage(userIcon)
      });
    });
  };
  // Defines properties of the map markers
  function markerMaker(airport){
    var airportMarker = new google.maps.Marker({
      position: new google.maps.LatLng( airport.latitude, airport.longitude),
      map: map,
      title: airport.identifier + "\n" + "Lat: " + String(airport.latitude) + ", Long: " + String(airport.longitude)
    });
    var infowindow = new google.maps.InfoWindow({
      content: airport.identifier
    });
    // Click Action shows airport in sidebar
    airportMarker.addListener('click', function() {
      alert("Clicked " + airport.identifier);
    });
  };
  // Maked a map marker for each airport
  gon.airports.forEach(function(airport){
    markerMaker(airport);
  });
});