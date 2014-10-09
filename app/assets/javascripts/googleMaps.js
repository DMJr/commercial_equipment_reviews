var googleMap;
function initialize() {
  var lats = (document.getElementsByClassName('lats'));
  var longs = (document.getElementsByClassName('longs'));
    if (lats.length > 1){
        var lat_values = [];
        for (var i=0; i <= lats.length; i++){
            lat = parseFloat(lats[i].innerHTML.trim());
            console.log(lat);
            lat_values.push(lat);
            // console.log(lat_values);
        }
    } else {
        lats = parseFloat($('.lats')[0].innerHTML.trim())
        longs = parseFloat($('.longs')[0].innerHTML.trim())
    }
    if (longs.length > 1) {
        var long_values = [];
        for (var i=0; i <= longs.length; i++){
            lng = parseFloat(longs[i].innerHTML.trim());
            console.log(lng);
            long_values.push(lng);
            console.log(long_values);
        }
    }
  console.log('###');
  // console.log(parseFloat(lats.innerHTML().));
  console.log(longs);
  console.log(typeof(lats));
  console.log(typeof(longs));
  var mapOptions = {
    zoom: 6,
    center: new google.maps.LatLng(lats, longs),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: js_array,
    scrollwheel: false,
  };

  googleMap = new google.maps.Map(document.getElementById('googleMap'),
      mapOptions);

  marker = new google.maps.Marker({
    map: googleMap,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: new google.maps.LatLng(lats, longs)
  });
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


