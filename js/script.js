var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 19.3910038, lng: -99.2837001},
        zoom: 4
    });

    for (var i = 0; i < 20; i++) {
        var myLatLng = {lat: places[i].lat, lng: places[i].lng};
        var contentString =
            '<div id="content"> <p>The city of <span id="purple">'
            + places[i].city + '</span> is the <span id="purple">#' + places[i].id + '</span> city for Northwestern EECS students to work after graduation</p>'
            + '<p>Many of these alumni work at <span id="purple">' + places[i].company + '</span></p>'
            + '<p>Over <span id="purple">' + places[i].popularity + '</span> Northwestern alumni work in the city of <span id="purple">' + places[i].city + '</span></p>'
            + 'To learn more about these alumni, click this <span id="purple"><a href="' + places[i].link + '">link</a></span>' + '</div>';
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