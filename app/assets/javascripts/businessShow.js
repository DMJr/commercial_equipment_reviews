$("#companyDescription").click(function(){
  var setColor = document.getElementById('companyDescription');
  setColor.style.color='grey';
  $('html, body').animate({
    scrollTop: $(".descriptionBox").offset().top
  }, 1000);
  setColor.style.color= "#414D57";
  setColor.style.fontWeight= "bold";
  var companyInfo = document.getElementById('companyInfo');
  companyInfo.style.color="";
});

$("#companyInfo").click(function(){
  var setColor = document.getElementById('companyInfo');
  setColor.style.color='grey';
  $('html, body').animate({
    scrollTop: $("#addressBox").offset().top
  }, 1000);
  setColor.style.color= "#414D57";
  setColor.style.fontWeight= "bold";
  var companyDescription = document.getElementById('companyDescription');
  companyDescription.style.color="";
});
