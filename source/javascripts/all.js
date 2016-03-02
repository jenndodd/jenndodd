// This is where it all goes :)

$(document).ready(function() {
  $(document).scroll(function() {
    if ($(document).scrollTop() > 0)
      $("nav").addClass("scroll");
    else 
      $("nav").removeClass("scroll");
  });
});



$(document).ready(function(){

  $(".piece").hover( 
    function(){ 
      $(this).children(".caption").fadeTo("fast", .7); 
    }, 
    function(){ 
      $(this).children(".caption").fadeTo("fast", 0); 
    }
  );
});
