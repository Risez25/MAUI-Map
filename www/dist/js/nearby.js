var mosque;
var map2;
var infowindow1;
var infowindow2;

function initMap() {
  var pyrmont = {lat: 2.9213, lng: 101.6559};

  mosque = new google.maps.Map(document.getElementById('mosque'), {
    center: pyrmont,
    zoom: 15
  });
  
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pyrmont = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        var request = {
            location: pyrmont,
            radius: '5000',
            query: 'mosque'
        };
        var infowindow1 = new google.maps.InfoWindow({map: mosque});

        infowindow1.setPosition(pyrmont);
        infowindow1.setContent('Your Location');
        mosque.setCenter(pyrmont);
        
        service = new google.maps.places.PlacesService(mosque);
        service.textSearch(request, callback1);
      }, function() {
        handleLocationError(true, infowindow1, mosque.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infowindow1, mosque.getCenter());
    }

  // Map 2
  map2 = new google.maps.Map(document.getElementById('map2'), {
    center: pyrmont,
    zoom: 15
  });
  
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pyrmont = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        var request = {
            location: pyrmont,
            radius: '5000',
            query: 'restaurant'
        };
        var infowindow2 = new google.maps.InfoWindow({map: map2});

        infowindow2.setPosition(pyrmont);
        infowindow2.setContent('Your Location');
        map2.setCenter(pyrmont);
        
        service = new google.maps.places.PlacesService(map2);
        service.textSearch(request, callback2);
      }, function() {
        handleLocationError(true, infowindow2, map2.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infowindow2, map2.getCenter());
    }
}
//callback 1
function callback1(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker1(results[i]);
      }
  }
  }

function createMarker1(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: mosque,
    position: place.geometry.location
  });

}
//callback 2
function callback2(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker2(results[i]);
      }
  }
  }

function createMarker2(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map2,
    position: place.geometry.location
  });

}
