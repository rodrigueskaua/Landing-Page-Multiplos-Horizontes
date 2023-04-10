$('.navbar-nav a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top;

  $('html, body').animate({
    scrollTop: targetOffset - 70

  }, 150);
})

const slideButtons = document.querySelectorAll(".nav-btn")
const videos = document.querySelectorAll(".video-slide")
const containers = document.querySelectorAll(".container-fluid")

slider = function(manual){
  slideButtons.forEach((button) => {
    button.classList.remove("active")
  })

  videos.forEach((video) => {
    video.classList.remove("active")
  })

  containers.forEach((container) => {
    container.classList.remove("active")
  })

  slideButtons[manual].classList.add("active"); 
  videos[manual].classList.add("active"); 
  containers[manual].classList.add("active"); 

}
slideButtons.forEach((button, i) => {
  button.addEventListener("click", () => {
    slider(i);
  })
})
