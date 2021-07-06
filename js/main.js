//$(".btn-primary").on("click", function(event){
//  $(".detailed").show("slow");
//  $(".container_main").hide("slow");
//  });

$(".email_btn").on("click", function(event){
    $(".form-group2").hide("slow");
    $(".form-group").show("slow");
});
$(".pn_btn").on("click", function(event){
    $(".form-group2").show("slow");
    $(".form-group").hide("slow");
});

var emailField = document.getElementById("emailField");
var button = document.getElementById("button");
var response = document.getElementById("detailed");
var response1 = document.getElementById("noRes");

button.addEventListener("click", function () {
  var email = emailField.value;
  if (validateEmail(email)) {
    $(".detailed").show("slow");
     $(".container_main").hide("slow");
     $(".noRes").hide("slow");
  } else {
  //  $(".noRes").show("slow");
  //   $(".container_main").hide("slow");
  //   $(".detailed").hide("slow");
  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
