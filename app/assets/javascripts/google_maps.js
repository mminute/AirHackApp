$(document).ready(function(){

  var defaultLocation = {
    center: new google.maps.LatLng(39.911105,-75.148058),
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("googleMap"), defaultLocation );

  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      var foundLocation = new google.maps.LatLng( position.coords.latitude,position.coords.longitude );
      map.setCenter( foundLocation );

      var userIcon = "http://maps.google.com/mapfiles/ms/icons/blue.png"

      var userMarker = new google.maps.Marker({
        position: foundLocation,
        map: map,
        title: 'User Location',
        animation: google.maps.Animation.DROP,
        icon: new google.maps.MarkerImage(userIcon)
      })

    });
  };
});