$('.navbar-nav a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top;

  $('html, body').animate({
    scrollTop: targetOffset - 70

  }, 150);
})


$(document).ready(function() {
  const carouselVideos = document.querySelectorAll('#carouselExampleCaptions video');

  // Função para carregar os vídeos sequencialmente
  function loadVideosSequentially() {
    let index = 0;
    const totalVideos = carouselVideos.length;

    function loadNextVideo() {
      if (index < totalVideos) {
        const video = carouselVideos[index];
        video.addEventListener('loadeddata', loadNextVideo);
        video.load();
        index++;
      }
    }

    loadNextVideo();
  }

  // Função para iniciar o pré-carregamento dos vídeos
  function preloadVideos() {
    carouselVideos.forEach(video => {
      video.load();
    });
  }

  // Evento de pré-carregamento quando a página for carregada
  window.addEventListener('load', preloadVideos);

  // Evento para carregar os vídeos sequencialmente após o pré-carregamento
  window.addEventListener('load', loadVideosSequentially);
});