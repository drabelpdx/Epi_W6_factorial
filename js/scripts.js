var factorial = function(number) {

  if (number === 0) {
    return 1;
  }
  return (number * factorial(number-1));
};

$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = 0
    if (isNaN(number)) {
      result = "not a valid input";
      number = "Your entry";
    } else {
      var result = factorial(number);
    }

    $(".result").text(result);
    $(".number").text(number);

    $("#result").show();
    event.preventDefault();
  });
});
