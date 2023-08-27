$(document).ready(function() {
  $('.navbar-section').fadeOut();
  $('.intro-section').fadeOut();
  $(".navbar-section").fadeIn("slow");
  $(".intro-section").fadeIn(2500);
  $('#about-me-section').fadeOut();
  $('#work-experience-section').fadeOut();
  $('#projects-section').fadeOut();
  $('#skills-section').fadeOut();
  $('#contact-section').fadeOut();
  $('#footer-section').fadeOut();
});

// var position = $(window).scrollTop(); 
// var navbarVisible = true;
// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//     if(scroll > position) {
//         // console.log('scrollDown');
//         if(!navbarVisible){
//           $("#navbar-id").removeClass("fixed-top");
//           navbarVisible = false;
//         }
        
//     } else {
//         //  console.log('scrollUp');
//         $("#navbar-id").addClass("fixed-top");
//         navbarVisible = true;
        
//     }
//     position = scroll;
// });

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 250) {
      $("#about-me-section").removeClass("temp-hide");
      $('#about-me-section').fadeIn();
      // $(".about-me-section").css('visibility', 'visible');
    }

    if(y > 1000){
      $("#work-experience-section").removeClass("temp-hide");
      $('#work-experience-section').fadeIn();
    }

    if(y > 1650){
      $("#projects-section").removeClass("temp-hide");
      $('#projects-section').fadeIn();
    }
    if(y > 2750){
      $("#skills-section").removeClass("temp-hide");
      $('#skills-section').fadeIn();
    }
    if(y > 3400){
      $("#contact-section").removeClass("temp-hide");
      $("#footer-section").removeClass("temp-hide");
      $('#contact-section').fadeIn();
      $('#footer-section').fadeIn();
    }
  });



  $("#about-nav").click(function(){
    // $("#about-me-section").removeClass("temp-hide");
    $('#about-me-section').fadeIn();
  })

  $('#work-nav').click(function(){
    $('#about-me-section').fadeIn();
    $('#work-experience-section').fadeIn();
  })

  $('#projects-nav').click(function(){
    $('#about-me-section').fadeIn();
    $('#work-experience-section').fadeIn();
    $('#projects-section').fadeIn();
  })

  $('#skills-nav').click(function(){
    $('#about-me-section').fadeIn();
    $('#work-experience-section').fadeIn();
    $('#projects-section').fadeIn();
    $('#skills-section').fadeIn();
  })

  $('#contact-nav').click(function(){
    $('#about-me-section').fadeIn();
    $('#work-experience-section').fadeIn();
    $('#projects-section').fadeIn();
    $('#skills-section').fadeIn();
    $('#contact-section').fadeIn();
    $('#footer-section').fadeIn();
  })