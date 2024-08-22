function showMenu() {
  document.getElementById('main-menu').style.left = "0px"
}
function hideMenu() {
  document.getElementById('main-menu').style.left = "-428px"
}

let startSlider = function() {
  $('.client-comments').slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    arrows: false
  });
}
$(document).ready(function(){
  if(screen.width<=540){
    $(".deleting-div").remove();
    startSlider();
  }
})