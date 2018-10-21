var latinfo = 52.1724462;
var lnginfo = 4.513105900000028;
var contenttext = "Postcode 2317GR Leiden";
var map;

function initMap() {

    var mypos = { lat: parseFloat(latinfo), lng: parseFloat(lnginfo) };

    map = new google.maps.Map(document.getElementById('map'), {

        center: mypos,

        zoom: 17,

        scrollwheel: false,

        navigationControl: false,

        mapTypeControl: false,

        scaleControl: false,

        draggable: true,

        styles: [{

            stylers: [{

                saturation: -100

            }]

        }]

    });

    var marker = new google.maps.Marker({

        position: mypos,

        map: map,

        icon: 'index_files/map-label.png'

    });
    // create info window         
    var infowindow = new google.maps.InfoWindow({

        content: '<div>' + contenttext + '</div>'

    });
    // show info window when marker is clicked
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });

}