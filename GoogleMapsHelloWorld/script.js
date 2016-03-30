var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.2756895, lng: -104.6556336},
        zoom: 5
    });

    for (var i = 0; i < 20; i++) {
        var myLatLng = {lat: places[i].lat, lng: places[i].lng};
        var contentString =
            '<div id="content" style="background-color: #885aa8">' + 'city: ' + places[i].city + '<br>'
            + 'company: ' + places[i].company + '<br>'
            + 'popularity: ' + places[i].popularity
            +  '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: places[i].city,
            info: contentString
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent( this.info);
            infowindow.open(map, this);
        });
    }


}

//function initMap() {
//    console.log("Hello");
//
//    var map = new google.maps.Map(document.getElementById('map'), {
//        zoom: 5,
//        center: {lat: 37.2756895, lng: -104.6556336}
//    });
//
//    var myLatLng = {lat: places[0].lat, lng: places[0].lng};
//
//    var marker = new google.maps.Marker({
//        position: myLatLng,
//        map: map,
//        title: 'Hello World!'
//    });
//
//}