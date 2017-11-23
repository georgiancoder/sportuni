$(document).ready(function() {
 
  $("#slider").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      pagination : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });



  // menu
  $("nav ul.left > li").hover(function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    $(this).find("div.submenu").slideDown();
    event.preventDefault();
    
  }, function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    $(this).find("div.submenu").slideUp();
    event.preventDefault();
  });
 
});