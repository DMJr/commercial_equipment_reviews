$("#ourMissionButton").click(function(){
  var setColor = document.getElementById('ourMissionButton');
    setColor.style.color='grey';
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

// window.onLoad = userGreeting();
//   function userGreeting(){
//       alert('hello there' );
//   };
