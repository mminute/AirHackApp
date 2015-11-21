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
        title: "User Location\n" + "Lat: " + String(foundLocation.lat()) + ", Long: " + String(foundLocation.lng()),
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
      var infoBar = $("aside.info-bar")
      var mainMap = document.getElementById("googleMap");

      if (infoBar){
        infoBar.remove();
      };

      makeInfobar(airport);
      mainMap.style.width="67%";
    });
  };

  function makeInfobar(airport){
    $("section.mapCanvas").append("<aside class='info-bar'></aside>")
    var ident = $("aside.info-bar").append("<div class='topics' id='identifier'></div>")
    ident_title = "<p>" + airport.identifier + "</p>";
    ident.append(ident_title)
  };
  // Make a map marker for each airport
  gon.airports.forEach(function(airport){
    markerMaker(airport);
  });
});