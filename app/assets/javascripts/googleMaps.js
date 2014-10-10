var googleMap;
function initialize() {
  var lats = (document.getElementsByClassName('lats'));
  var longs = (document.getElementsByClassName('longs'));
    if (lats.length >= 1) {
        var lat_values = [];
        for (var i=0; i < lats.length; i++){
            lat = parseFloat(lats[i].innerHTML.trim());
            if (isNaN(lat) == false ) {
                lat_values.push(lat);
            }
        }
    }
    if (longs.length >= 1) {
        var long_values = [];
        for (var i=0; i < longs.length; i++){
            lng = parseFloat(longs[i].innerHTML.trim());
            if (isNaN(lng) == false ) {
                long_values.push(lng);
            }
        }
    }
    if (lat_values.length) {
        var locations = [];
        for (var i=0; i < lat_values.length; i++) {
            locations.push([lat_values[i], long_values[i]]);
        }
    }
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        zoom: 6,
        center: new google.maps.LatLng(locations[0][0], locations[0][1]),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: js_array,
        scrollwheel: false,
      };

    googleMap = new google.maps.Map(document.getElementById('googleMap'),
        mapOptions);

    for( i = 0; i < locations.length; i++ ) {
        var position = new google.maps.LatLng(locations[i][0], locations[i][1]);
        marker = new google.maps.Marker({
            position: position,
            map: googleMap,
            draggable:true,
            animation: google.maps.Animation.DROP,
        });
        bounds.extend(position);
    }
    if (locations.length > 1){
        googleMap.fitBounds(bounds);
    }
    google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);


js_array = [
    {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#acbcc9"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "color": "#f2e5d4"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c5c6c6"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e4d7c6"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fbfaf7"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c5dac6"
            }
        ]
    },
    {
        "featureType": "administrative",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 33
            }
        ]
    },
    {
        "featureType": "road"
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 20
            }
        ]
    },
    {},
    {
        "featureType": "road",
        "stylers": [
            {
                "lightness": 20
            }
        ]
    }
]
