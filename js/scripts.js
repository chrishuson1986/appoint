// Business (or back-end) logic:

// var apt = function(number1, number2, number3, number4) {
//   alert("Here is your confirmation" + .result);
// };



// User interface (or front-end) logic:
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var number1 = $("#name").val();
    var number2 = ($("#desc").val());
    var number3 = ($("#apt").val());
    var number4 = ($("#start").val());
    alert("Does this look correct?      " + number1 + " " + number2 + " " + number2 + " " + number4);
    // alert(number1);

  });


});
