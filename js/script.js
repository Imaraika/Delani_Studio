$(document).ready(function() {
  $("#des-ic").click(function() {
    $("#des-hidden").toggle();
    $("#image-showingAgain").toggle();
  });
  $("#dev-ic").click(function(){
    $("#dev-hidden").toggle();
    $("#dev-image-showing").toggle();
  });
  $("#pro-ic").click(function(){
    $("#proMgt-hidden").toggle();
    $("#pro-image-showing").toggle();
  });
  $("#submitBtn").click(function(){
    $("#myForm").submit();
  })


  $("h3").css("font-weight","bold");
  $("#des-parg").css({"text-align": "center"});

});
