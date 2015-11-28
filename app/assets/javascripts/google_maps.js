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
    $("section.mapCanvas").append("<aside class='info-bar'></aside>");
    makeInfoBarHider();
    // Ident and Link
    var identAndLink = "<a href=" + airport.airnav_url + " target='_blank'>" + airport.identifier + "</a>"
    $("aside.info-bar").append("<div class='topics' id='identifier'>" + identAndLink + "</div>");

    // Location
    $("aside.info-bar").append("<div class='topics' id='location'>Location</div>");
    var latString = "<p>Lat: " + airport.latitude + ", Long: " + airport.longitude + "</p>"
    $("#location").append(latString)

    // Add weather here

    // add notams here

    // VFR Map
    if(airport.vfr_map) {
      $("aside.info-bar").append("<div class='topics' id='vfr-map'>VFR Map</div>");
      var vfrImage = "<img src=" +  airport.vfr_map +">"
      var vfrLink = "http://vfrmap.com/?type=vfrc&lat=" + airport.latitude + "&lon=" + airport.longitude + "&zoom=10"
      var combinedImageLink = "<a href=" + vfrLink + " target='_blank'>" + vfrImage + "</a> <p>Click map for larger image</p>"
      $("#vfr-map").append(combinedImageLink)
    };

    // Aerial Photo
    if(airport.aerial_photo) {
      $("aside.info-bar").append("<div class='topics' id='aerial-photo'>Aerial Photo</div>");
      var aerialPhoto = "<img src=" +  airport.aerial_photo +">"
      $("#aerial-photo").append(aerialPhoto)
    };

    // Airport Diagram- Work on finding link to larger pdf
    // http://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dtpp/search/results/
    if(airport.airport_diagram) {
      $("aside.info-bar").append("<div class='topics' id='airport-diagram'>Airport Diagram</div>");
      var diagramImage = "<img src=http://" +  airport.airport_diagram +">"
      $("#airport-diagram").append(diagramImage)
    };

    // drop airport_diagram_pdf_link column? Does not appear to work as

    // t.text     "notam_link"
    // t.text     "runway_info"
    // t.text     "airport_comms"
    // t.text     "airport_operations"
    // t.text     "vor"
    // t.text     "non_directional_beacon"
    // t.text     "airport_services"
    // t.text     "airport_ownership"
    // t.text     "airport_ops_stats"
    // t.text     "additional_remarks"
    // t.text     "nearby_airports_with_instrument_approaches"
    // t.text     "other_pages"
    // t.text     "where_to_stay"
    // t.text     "aviation_businesses"
  };

  function makeInfoBarHider() {
    $("aside.info-bar").append("<div class='info-bar-hider'>Hide Me</div>")
    hider = $("div.info-bar-hider")
    hider.click(function() {
      $("#googleMap").css('width','100%');
      $("aside.info-bar").remove();
    });
  };

  // Make a map marker for each airport
  gon.airports.forEach(function(airport){
    markerMaker(airport);
  });
});