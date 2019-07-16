$(document).ready(function() {
  // Write your JavaScript below
  $("#secrets-box").hide()
  $("#go-away-box").hide()


$("#yes-secret").click(function() {

 $("#buttons-box").hide()
 $("#secrets-box").show()
	
});

$("#No").click(function() {

 $("#buttons-box").hide()
 $("#go-away-box").show()
	
});


});