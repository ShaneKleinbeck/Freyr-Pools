function initMap() {

  var myLatlng = {lat: 32.152701, lng: 13.706484};

  var mapOptions = {
    zoom: 3,
    center: myLatlng,
    scrollwheel: false
  }

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Current Locations For Maps Markers
  var locations = [{
    "lat": -22.441693,
    "lng": -41.849002,
    "title": "Dark Splash"
  },
  {
    "lat": 38.034485,
    "lng": -121.261259,
    "title": "Hans Eiskonen"
  },
  {
    "lat": 35.124244,
    "lng": 117.520250,
    "title": "Jason Chen"
  },
  {
    "lat": 55.717213,
    "lng": 12.623801,
    "name": "Jay Ma"
  },
  {
    "lat": 29.671129,
    "lng": 91.313454,
    "title": "Kees Kortmulder"
  },
  {
    "lat": 60.123522,
    "lng": 6.353913,
    "title": "Michael James"
  },
  {
    "lat": -22.985878,
    "lng": -43.185796,
    "title": "Nad Hemnani"
  },
  {
    "lat": 25.100260,
    "lng": 80.428452,
    "title": "Raining Huang"
  },
  {
    "lat": 29.703957,
    "lng": -99.093186,
    "title": "Suttipong Surak"
  },
  {
    "lat": 35.690209,
    "lng": -105.887508,
    "title": "Vita Vilcina"
  },
  {
    "lat": 34.431897,
    "lng": -119.776785,
    "title": "Overgrown Entrance"
  }]

  // Loop Through Markers Array
  for(i = 0; i < locations.length; i++){
    var obj = locations[i];

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(obj.lat, obj.lng),
      map: map,
      animation: google.maps.Animation.DROP
    });

    // Add Click Listener to Show Modal
    google.maps.event.addListener(marker, 'click', function(){
      $('#myModal').modal('show');
    });
  }
}