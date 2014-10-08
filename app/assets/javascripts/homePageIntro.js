$(document).ready(function(){
    setTimeout(pictureFade, 1000);
    setTimeout(menuFlash, 2000);
    setTimeout(homePageTextAppear, 2500);
    setTimeout(homePageTextAppear1, 3000);
    setTimeout(homePageTextAppear2, 3500);
});
function menuFlash(){
  nav_bar_elements = $('.pageNaveSpacing');
  jQuery.each(nav_bar_elements, function(i){
    var el=$(this);
    setTimeout(function() {
        el.addClass('menu-flash');
    }, i * 100);
  });
};

function pictureFade(){
  $('#homeImageFadeout').fadeTo(5000, 0.7).fadeTo('slow', 1.0);
}
function homePageTextAppear(){
  $('#homePageTitleDiv').fadeIn('slow');
  console.log('here');
}
function homePageTextAppear1(){
  $('#homePageSubDiv1').fadeIn('slow');
  console.log('here');
}
function homePageTextAppear2(){
  $('#homePageSubDiv2').fadeIn('slow');
  console.log('here');
}

$('#reviewButton').click(function() {
    $('#reviewDiv').fadeIn('slow');
});
$('#contactButton').click(function() {
    $('#contactDiv').fadeIn('slow');
});
