  var myLatlng = {
    lat: 23.8103,
    lng: 90.4125
}
var mapOption = {
    center: myLatlng,
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var maps = new google.maps.Map(document.getElementById('googleMap'), mapOption);
var diretionsService = new google.maps.DirectionsService();
var diretionsDisplay = new google.maps.DirectionsRenderer();


function calculateRoute() {
    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelmode: google.TravelMode.DRIVING,
        unitSystem: google.maps.unitSystem.IMPERIAL
    }
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            $("#output").html("<div class='alert-info'>From:" + document.getElementById("from").value +
                    "</br>To:" + document.getElementById("to").value) +
                "Driving Distance:" + result.routes[0].legs[0].distance.text +
                "</br>Duration Is: " + result.routes[0].legs[0].duration.text + ".</div>";
            directionsDisplay.setDirections(result);
        } else {
            directionsDisplay.setDirections({
                routes: []
            });
            map.setCenter(myLatlng);
            $("#output").html("<div class='alert-danger'>Could Not Retrive Driving Distance</div>");
        }
    });

}
var options = {
    types: ['(cities)']
}
var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete1 = new google.maps.places.Autocomplete(input2, options);