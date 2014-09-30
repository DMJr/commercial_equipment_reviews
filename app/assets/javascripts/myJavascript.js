$('.top-bar li').mouseenter(function() {
      this.style.color ='grey';
      this.style.fontWeight = 'bold';
  })
  .mouseleave(function() {
      $('.top-bar li').attr('style','')
  });

$('#sticky_footer').mouseenter(function() {
      this.style.fontWeight = 'bold';
      this.style.height = '50px';
  })
  .mouseleave(function() {
      $('#sticky_footer').attr('style','')
  });


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
  if($(window).scrollTop() > 200 ){
    $('#sticky_footer').stop(true,true).fadeIn("slow");
  } else {
    $('#sticky_footer').stop(true,true).fadeOut("slow");
  }
});


$(document).ready(function(){
    setTimeout(menuFlash,2000);
});
function menuFlash(){
  nav_bar_elements = $('.pageNaveSpacing')
  jQuery.each(nav_bar_elements, function(i){
    var el=$(this);
    setTimeout(function() {
        el.addClass('menu-flash');
    }, i * 100);
  });
};



var map;
function initialize() {
  var myLatLng = new google.maps.LatLng(39.50, -98.35);
  var mapOptions = {
    zoom: 3,
    center: myLatLng,
  };
  map = new google.maps.Map(document.getElementById('homepage-map'),
      mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);



