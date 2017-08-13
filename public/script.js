$(function(){

  $(".contact-btn").click(function() {
      $('html,body').animate({
          scrollTop: $(".contact-info").offset().top},
          'slow');
  });




$(".contact-form").submit(function(e){

e.preventDefault();
  var data = $(".contact-form").serialize();

  $.ajax({
  type: "POST",
  url: "/sendEmail",
  data: data,
  success: function(data){
    $(".contact-form").replaceWith("<h3> Thank you for posting an inquiry with KOP Communications. We promise to return your request as soon as possible. </h3>")
  },
  error: function(data){
    $(".contact-form").replaceWith("<h3> There was an error processing your request, please refresh the page and try again. </h3>")
  }
});

});

});
