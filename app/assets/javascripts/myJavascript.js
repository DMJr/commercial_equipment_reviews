$("#ourMissionButton").click(function(){
  var setColor = document.getElementById('ourMissionButton');
  setColor.style.color='grey';
  $('#homePageImage1').fadeTo('slow',0.5);
  $('html, body').animate({
    scrollTop: $("#ourMission").offset().top
  }, 1000);
  console.log('here');
});


$("#ourManufacturersButton").click(function(){
  var setColor = document.getElementById('ourManufacturersButton');
    setColor.style.color='grey';
  $('html, body').animate({
    scrollTop: $("#ourManufacturers").offset().top
  }, 1000);
});


$("#findADealerButton").click(function(){
  var setColor = document.getElementById('findADealerButton');
    setColor.style.color='grey';
  $('html, body').animate({
    scrollTop: $("#findDealer").offset().top
  }, 1000);
});


$("#sticky_footer").click(function(){
  $('#homePageImage1').fadeTo(1000,1.0);
  $('html, body').animate({scrollTop : 0},800);
  return false;
});


var map;
function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);



// $(document).ready(function(){
//   $(window).scroll(function(){
//       var height = $('body').height();
//       var scrollTop = $('body').scrollTop();
//       var opacity = 1;
//       if(scrollTop > 400) {
//           opacity = 0.5;
//       }
//       $('#homePageImage1').css('opacity', 0.5);
//   });
// });

// window.onLoad = userGreeting();
//   function userGreeting(){
//       alert('hello there' );
//   };
