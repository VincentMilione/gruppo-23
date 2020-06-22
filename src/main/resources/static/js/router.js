let myLatLng = {lat: 40.6978202, lng: 14.7390583}
let ignore = false
let markers = []
let map
let circle
let directionsDisplay
let directionsService 

function resetBox (){
    $('#addresses').val('')
    $('#percorso').off()
    $('#box').hide()
  }

function route(map, start, end){
    var directions = {start: start, end: end};
    
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

function deRoute() {
    directionsDisplay.setMap(null)
}

//crea la lista (dentro raggio e fuori raggio)
function createList () {
    
    let in_ = $('#in')
    let out_ = $('#out')

    markers.forEach(function(e){

        let str = $('<li class="list-group-item"></li>')
        let div = $('<div id="'+e.animal.gps+'">'+e.animal.name+'<div>')
        div.hover(function(){ $(this).css('cursor','pointer')}, function () {$(this).css('cursor','auto')})
        div.click(function () {
            if($("#percorso").html() != "Cancella percorso")
                new google.maps.event.trigger(e, 'click');
        })

        str.append(div)
        if(e.getIcon() == null){
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

function createMarkers(list) {

    list.forEach(function(e) {
        let cor = e.cordinate
        let center = myLatLng
        let marker = new google.maps.Marker({
                position: cor,
                map: map,
                animal: e
            });
        
        insideRay(marker, circle.getRadius())

        var infowindow = new google.maps.InfoWindow({
            content:e.name,
            map: map
        });

        google.maps.event.addListener(marker, 'click', function() {
            //qui per aggiungere la cosa per il routing
            resetBox()
            $('#box').toggle()
            infowindow.open(map,marker);
            document.getElementById("addresses").value = marker.animal.address;
            $('#percorso').click(function () {
                //dobbiamo staccare il listener ed attaccare uno che cancella il percorso
                if("Individua percorso" == $(this).html()) {
                    $(this).html("Cancella percorso")
                    $("#cross").hide()
                    route(map, myLatLng, marker.getPosition())
                } else {
                    $(this).html("Individua percorso")
                    $("#cross").show()
                    deRoute()
                }
            
            })
        });

        markers.push(marker)
    })
}

//funzione per inizializzare la mappa
function myMap() {

    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsService = new google.maps.DirectionsService();

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
    
    $.getJSON('/api/getRegister', function (list) {
        createMarkers(list)
        createList()
       
        google.maps.event.addListener(circle, 'radius_changed', function() {
            markers.forEach(function(e){
                insideRay(e, circle.getRadius())
            })
            $("#in").empty()
            $("#out").empty()
            createList()
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
      })   
}



