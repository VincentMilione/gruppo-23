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

let myLatLng = {lat: 40.6978202, lng: 14.7390583}
let ignore = false
let register = new Register()
let list = register.list
let map
let circle


//crea la lista (dentro raggio e fuori raggio)
function createList () {
    
    let in_ = $('#in')
    let out_ = $('#out')

    list.forEach(function(e){

        let str = $('<li class="list-group-item"></li>')
        let div = $('<div id="'+e.tracker+'">'+e.name+'<div>')
        div.click(function () {
            let animal= register.getAnimal($(this).attr('id'))
             map.setCenter(animal.marker.getPosition())
            map.setZoom(20)
            $('#addresses').val(animal.address)
           
        })

        str.append(div)
        if(e.marker.getIcon() == null){
            str.css("color", "red")
            out_.append(str)
        } else{
            str.css("color", "green")
            in_.append(str)
        }
    })
}

function insideRay (marker, ray) {
    let dis = google.maps.geometry.spherical.computeDistanceBetween(marker.getPosition(), circle.getCenter())

    if (dis > ray) {
        marker.setIcon(null);
    } else {
        marker.setIcon({url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'});
    }
}

function createMarkers() {

    list.forEach(function(e) {
        let cor = e.cordinate
        let center = myLatLng
        let marker = new google.maps.Marker({
                position: cor,
                map: map,
            
            });
        
        e.marker = marker
        insideRay(marker, circle.getRadius())

        var infowindow = new google.maps.InfoWindow({
            content:e.name,
            address:e.address,
            map: map
        });

        google.maps.event.addListener(marker, 'click', function() {
            //qui per aggiungere la cosa per il routing
            
            infowindow.open(map,marker);
            document.getElementById("addresses").value = infowindow.address;
        });
    })
}

//funzione per inizializzare la mappa
function myMap() {

    //mappa
    map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 13,
        center: myLatLng
    });

    //cerchio per il raggio di azione
    circle = new google.maps.Circle({
        center:myLatLng,
        radius:2000,
        strokeColor:"#0000FF",
        strokeOpacity:0.8,
        strokeWeight:2,
        fillColor:"#0000FF",
        fillOpacity:0.4,
        editable:true,
        draggable: false,
        map: map
    });
    
    createMarkers()
    createList()

    google.maps.event.addListener(circle, 'radius_changed', function() {
        list.forEach(function(e){
            insideRay(e.marker, circle.getRadius())

            let li = $('#'+e.tracker)

            if (e.marker.getIcon() == null && li.parent().attr('id') == 'out') {
                $('#out #' +e.tracker).remove() 
                $('#in').append(li)
            } else if (e.marker.getIcon() != null && li.parent().attr('id') == 'in') {
                $('#in #' +e.tracker).remove() 
                $('#out').append(li)
            }     
        })
    });


    
    google.maps.event.addListener(circle, 'center_changed', function() {
        if (ignore){
            ignore = false;
            return;
        }
        circle.setEditable(false);
        ignore = true;
        circle.setCenter(myLatLng);
        circle.setEditable(true);
    });
}
