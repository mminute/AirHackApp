$(document).ready(function(){
    //Get location
    var location = new Promise(function(resolve, reject){
      navigator.geolocation.getCurrentPosition(function(position) {

        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        coords = {};
        coords["latitude"] = lat;
        coords["longitude"] = lon;

        resolve(coords);
      }); // navigator
    }); //promise

    location.then(function(coords){
      var textArea = document.getElementById('coord');
      textArea.innerHTML = coords["latitude"] + " " + coords["longitude"];

      // function initialize() {
        var mapProp = {
          center:new google.maps.LatLng(coords["latitude"],coords["longitude"]),
          zoom:5,
          mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
      // }
    })

    // Promise.done(function(){
    //   var textArea = document.getElementById('coord');
    //   textArea.innerHTML = "New Contents";
    // })
    
    // var textArea = document.getElementById('coord');
    // textArea.innerHTML = coords;
    

    








  }
)




// function initialize() {
//   var mapProp = {
//     center:new google.maps.LatLng(51.508742,-0.120850),
//     zoom:5,
//     mapTypeId:google.maps.MapTypeId.ROADMAP
//   };
//   var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
// }
// // google.maps.event.addDomListener(window, 'load', initialize);


// var textArea = document.getElementById('coord');
// textArea.innerHTML = "New Contents";











// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

// function initMap() {
//   var map = new google.maps.Map(document.getElementById('googleMap'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 6
//   });
//   var infoWindow = new google.maps.InfoWindow({map: map});

//   // Try HTML5 geolocation.
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };

//       infoWindow.setPosition(pos);
//       infoWindow.setContent('Location found.');
//       map.setCenter(pos);
//     }, function() {
//       handleLocationError(true, infoWindow, map.getCenter());
//     });
//   } else {
//     // Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
//   }
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(browserHasGeolocation ?
//                         'Error: The Geolocation service failed.' :
//                         'Error: Your browser doesn\'t support geolocation.');
// }