// This is where it all goes :)

$(document).ready(function() {
  $(document).scroll(function() {
    if ($(document).scrollTop() > 0)
      $("nav").addClass("scroll");
    else 
      $("nav").removeClass("scroll");
  });
});