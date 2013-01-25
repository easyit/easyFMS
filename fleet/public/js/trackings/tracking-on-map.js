var map;
var g_infowindow ;
function map_initialize(mapElementId) {

    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(3.00950002670288, 101.392852783203),
        panControl: true,
        zoomControl: true,
        scaleControl: true,
        overviewMapControl: true,
        streetViewControl: true,
        mapTypeControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById(mapElementId), mapOptions);

    g_infowindow = new google.maps.InfoWindow({
        content: "Hello"
    });

    google.maps.event.addListener(map, 'click', function() {
      g_infowindow.close();
    });

}

$(document).ready(function(){
    // var vpsController = new VehiclePollingStatusController();
    // vpsController.load();

    map_initialize('map_canvas');

});