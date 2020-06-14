function route(map, start, end){
    var directions = {start: start, end: end};
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var directionsService = new google.maps.DirectionsService();

    directionsService.route({
    origin:directions.start,
    destination: directions.end,
    travelMode: google.maps.TravelMode.DRIVING
},
function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result);
        directionsDisplay.setMap(map);

    }
    else {
        alert("Directions Request failed:" +status);
    }
});
}	  