$(document).ready(function() {
  $("#des-ic").click(function() {
    $("#des-hidden").toggle();
    $("#image-showingAgain").toggle();
  });
  $("#dev-ic").click(function() {
    $("#dev-hidden").toggle();
    $("#dev-image-showing").toggle();
  });
  $("#pro-ic").click(function() {
    $("#proMgt-hidden").toggle();
    $("#pro-image-showing").toggle();
  });
  $("#submitBtn").click(function() {
    $("#myForm").submit();
    alert("Thank you to reach out with us!");
  });
  $("h3").css("font-weight", "bold");
  $("#des-parg").css({ "text-align": "center" });
});
$("#work1").hover(function() {
  $("#work1").css("opacity", "0.3");
  $(".projectname1").css("opacity", "1");
  $(".middle1").css("visibility", "visible");
});
$("#work1").mouseout(function() {
  $(".middle1").css("visibility", "hidden");
  $("#work1").css("opacity", "18");
});
$("#work2").hover(function() {
  $("#work2").css("opacity", "0.3");
  $(".projectname2").css("opacity", "1");
  $(".middle2").css("visibility", "visible");
});
$("#work2").mouseout(function() {
  $(".middle2").css("visibility", "hidden");
  $("#work2").css("opacity", "18");
});
$("#work3").hover(function() {
  $("#work3").css("opacity", "0.3");
  $(".projectname3").css("opacity", "1");
  $(".middle3").css("visibility", "visible");
});
$("#work3").mouseout(function() {
  $(".middle3").css("visibility", "hidden");
  $("#work3").css("opacity", "18");
});
$("#work4").hover(function() {
  $("#work4").css("opacity", "0.3");
  $(".projectname4").css("opacity", "1");
  $(".middle4").css("visibility", "visible");
});
$("#work4").mouseout(function() {
  $(".middle4").css("visibility", "hidden");
  $("#work4").css("opacity", "18");
});
