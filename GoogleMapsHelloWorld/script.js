var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.2756895, lng: -104.6556336},
        zoom: 5
    });

    JSON.parse('places.json');


    //map.data.loadGeoJson('places.json');

    }
