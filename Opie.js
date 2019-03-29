

var vid= document.getElementById("opie-swimming");
vid.playbackRate = .4;

//window.onload = function () {
   //vid.muted = "muted";
//}

var Index = 1;
showSlides(Index);

// Next/previous controls
function plusSlides(n) {
  showSlides(Index += n);
}

// Thumbnail image controls
function thisSlide(n) {
  showSlides(Index = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("pics");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {Index = 1}
  if (n < 1) {Index = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" current", "");
  }
  slides[Index-1].style.display = "block";
  dots[Index-1].className += " current";
}
