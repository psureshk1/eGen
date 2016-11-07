// left side nav bar
var $slider=true;
$("#hamburger a").on("click",function(){
  if($slider)
 {

  $('#navRight').addClass('show-sidenav');
  $('#hamburger').addClass('move-main');
  $slider=!$slider;
  // alert("add class");
 //  $("#content").css('width:100%');
 //   $(".navbar-default").css('width:100%');
 //  $

  }
  else{
   $('#navRight').removeClass('show-sidenav');
   $('#hamburger').removeClass('move-main');
  $slider=!$slider;
  // alert(" remove class");
  }
});



           
// $(this).hide("slide", { direction: "left" }, 1000);