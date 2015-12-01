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

      makeAjaxRequest("airports/" + airport.id)

      if (infoBar){
        infoBar.remove();
      };

      // makeInfobar(airport);
      mainMap.style.width="67%";
    });
  };

  function makeAjaxRequest(url){
    $.ajax({
      url: url,
      // dataType: 'jsonp',
      success: alert("hello"),
    })
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
      var combinedImageLink = "<a href=" + vfrLink + " target='_blank'>" + vfrImage + "</a>"
      $("#vfr-map").append(combinedImageLink)
    };






    // Maybe iterate through desired keys by removing undesired
   // Object.keys(gon.airports[0]) - ["id", "updated_at"] ...

    // var infoBar = $("aside.info-bar")
    // $.each(airport, function(k,v) {
    //   if (v) {
    //     var htmlElement = "<div class='topics' id=" + k + ">" + k + "</div>"
    //     infoBar.append(htmlElement);
    //     var valueElement = "<p>" + v + "</p>"
    //     $("#" + k).append(valueElement);
    //   };
    // });
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