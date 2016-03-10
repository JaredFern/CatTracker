var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.2756895, lng: -104.6556336},
        zoom: 5
    });

    locations = JSON.parse('places.json');

    for (var incident in locations) {
      var marker = new google.maps.Marker({
      	position: locations[incident].center,
      	map:map
      })
    }

    //map.data.loadGeoJson('places.json');

    }
