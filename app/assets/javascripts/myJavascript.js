$("#ourMissionButton").click(function(){
  var setColor = document.getElementById('ourMissionButton');
  setColor.style.color='grey';
  $('#homePageImage1').fadeTo('slow',0.5);
  $('html, body').animate({
    scrollTop: $("#ourMission").offset().top
  }, 1000);
});


$("#ourPlanButton").click(function(){
  var setColor = document.getElementById('ourPlanButton');
    setColor.style.color='grey';
  $('html, body').animate({
    scrollTop: $("#ourPlan").offset().top
  }, 1000);
});


$("#findADealerButton").click(function(){
  var setColor = document.getElementById('findADealerButton');
    setColor.style.color='grey';
  $('html, body').animate({
    scrollTop: $("#findDealer").offset().top
  }, 1000);
});

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
