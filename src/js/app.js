var app = angular.module('MAUIMap', [
  'ngRoute',
  'mobile-angular-ui',
  'MAUIMap.controllers.Main',
  //'ngMap'
  //'ngGeolocation'
]);

app.config(function($routeProvider,$locationProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
  //$routeProvider.when('/restaurant', {templateUrl:'restaurant.html',  reloadOnSearch: false});
  $locationProvider.hashPrefix('');
});

app.controller('MainController', function() {
  //   NgMap.getMap().then(function(map) {
  //   console.log(map.getCenter());
  //   console.log('markers', map.markers);
  //   console.log('shapes', map.shapes);
  // });
  //  var map;
  //   var infowindow;

  //   function initMap() {
  //     var pyrmont = {lat: 2.9213, lng: 101.6559};

  //     map = new google.maps.Map(document.getElementById('map'), {
  //       center: pyrmont,
  //       zoom: 15
  //     });

  //       var request = {
  //         location: pyrmont,
  //         radius: '5000',
  //         query: 'mosque'
  //     };

  //     service = new google.maps.places.PlacesService(map);
  //     service.textSearch(request, callback);
  //   }

  //   function callback(results, status) {
  //     if (status == google.maps.places.PlacesServiceStatus.OK) {
  //         for (var i = 0; i < results.length; i++) {
  //         var place = results[i];
  //         createMarker(results[i]);
  //         }
  //     }
  //     }

  //   function createMarker(place) {
  //     var placeLoc = place.geometry.location;
  //     var marker = new google.maps.Marker({
  //       map: map,
  //       position: place.geometry.location
  //     });

  //     google.maps.event.addListener(marker, 'click', function() {
  //       infowindow.setContent(place.name);
  //       infowindow.open(map, this);
  //     });
  //   }
});

app.controller('GeolocController', function($scope){

    // $scope.$geolocation = $geolocation

    // // basic usage
    // $geolocation.getCurrentPosition().then(function(location) {
    //   $scope.location = location
    // });

    // // regular updates
    // $geolocation.watchPosition({
    //   timeout: 60000,
    //   maximumAge: 2,
    //   enableHighAccuracy: true
    // });
    // $scope.coords = $geolocation.position.coords; // this is regularly updated
    // $scope.error = $geolocation.position.error; // this becomes truthy, and has 'code' and 'message' if an error occurs

    // var map;
    // var infowindow;

    // function initMap() {
    //   var pyrmont = {lat: 2.9213, lng: 101.6559};

    //   map = new google.maps.Map(document.getElementById('map'), {
    //     center: pyrmont,
    //     zoom: 15
    //   });

    //     var request = {
    //       location: pyrmont,
    //       radius: '5000',
    //       query: 'mosque'
    //   };

    //   service = new google.maps.places.PlacesService(map);
    //   service.textSearch(request, callback);
    // }

    // function callback(results, status) {
    //   if (status == google.maps.places.PlacesServiceStatus.OK) {
    //       for (var i = 0; i < results.length; i++) {
    //       var place = results[i];
    //       createMarker(results[i]);
    //       }
    //   }
    //   }

    // function createMarker(place) {
    //   var placeLoc = place.geometry.location;
    //   var marker = new google.maps.Marker({
    //     map: map,
    //     position: place.geometry.location
    //   });

    //   google.maps.event.addListener(marker, 'click', function() {
    //     infowindow.setContent(place.name);
    //     infowindow.open(map, this);
    //   });
    // }
});