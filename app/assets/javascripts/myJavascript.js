$("#ourMissionButton").click(function(){
  var setColor = document.getElementById('ourMissionButton');
  setColor.style.color='grey';
  $('#homePageImage1').fadeTo('slow',0.5);
  $('html, body').animate({
    scrollTop: $("#ourMission").offset().top
  }, 1000);
  setColor.style.color='white';
});



$("#whatsNewButton").click(function(){
  var setColor = document.getElementById('whatsNewButton');
    setColor.style.color='grey';
  $('html, body').animate({
    scrollTop: $("#whatsNew").offset().top
  }, 1000);
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
  var topdivs = $('#findADealerButton, #ourManufacturersButton,\
                    #ourMissionButton, #whatsNewButton');
  topdivs.attr('style','')
  $('#homePageImage1').fadeTo(1000,1.0);
  $('html, body').animate({scrollTop : 0},800);
  return false;
});


function stripWhiteAndBlank(element) {
  if (element != ' '){
    return element
  };
}


$(document).ready(function(){
  var ourMissionButtonArray = $('#ourMissionButton').text().split("");
  var filteredArray = ourMissionButtonArray.filter(stripWhiteAndBlank);
  console.log(filteredArray);
  for (var i = 0; i < filteredArray.length; i++) {
    console.log(filteredArray[i])
  };
})

$(window).scroll(function(){
  if($(window).scrollTop() > 150 ){
    $('#sticky_footer').stop(true,true).fadeIn("slow");
  } else {
    $('#sticky_footer').stop(true,true).fadeOut("slow");
  }
});

// var window_height = $('body').scrollTop()
// if (window_height < 60){
//   console.log('success')
// } else {
//   $("#sticky_footer")[0].style.opacity = 1.0;
// }


// var map;
// function initialize() {
//   var mapOptions = {
//     zoom: 8,
//     center: new google.maps.LatLng(-34.397, 150.644)
//   };
//   map = new google.maps.Map(document.getElementById('map-canvas'),
//       mapOptions);
// }
// google.maps.event.addDomListener(window, 'load', initialize);





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
