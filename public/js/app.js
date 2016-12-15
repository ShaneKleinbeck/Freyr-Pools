'Use Strict';

console.log("CONNECTED");

// Create Array of Projects
var currentProjects = [
  {name: "Dark Splash", image: "/images/dark-splash.jpeg"},
  {name: "Hans Eiskonen", image: "/images/hans-eiskonen.jpg"},
  {name: "Jason Chen", image: "/images/jason-chen.jpg"},
  {name: "Jay Ma", image: "/images/jay-ma.jpg"},
  {name: "Kees Kortmulder", image: "/images/kees-kortmulder.jpg"},
  {name: "Michael James", image: "/images/michael-james.jpg"},
  {name: "Nad Hemnani", image: "/images/nad-hemnani.jpg"},
  {name: "Raining Huang", image: "/images/raining-huang.jpg"},
  {name: "Suttipong Surak", image: "/images/suttipong-surak.jpg"},
  {name: "Vita Vilcina", image: "/images/vita-vilcina.jpg"}
];

function initMap() {

  var myLatlng = new google.maps.LatLng(32.152701, 13.706484);

  var mapOptions = {
    zoom: 3,
    center: myLatlng,
    scrollwheel: false
  }

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  fetch('/markers.json')
    .then(function(response){return response.json()})
    .then(plotMarkers);

  function plotMarkers(plotMarkers){
    markers = [];

    plotMarkers.forEach(function(marker){
      var position = new google.maps.LatLng(marker.lat, marker.lng);
      var title = marker.title;

      markers.push(
        new google.maps.Marker({
          position: position,
          title: title,
          map: map,
          animation: google.maps.Animation.DROP
        })
      );
    })
  }
}



