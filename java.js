// Botón scroll
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = (document.documentElement.scrollTop > 200) ? "block" : "none";
};
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Hora en footer
function mostrarHora() {
  const ahora = new Date();
  const hora = ahora.toLocaleTimeString();
  document.getElementById("hora").innerText = `Hora actual: ${hora}`;
}
mostrarHora();
setInterval(mostrarHora, 60000);

// Reproducción automática de música
const iframe = document.getElementById("iframeMusica");
const playMusicBtn = document.getElementById("playMusicBtn");

function iniciarMusica() {
  iframe.src = "https://www.youtube.com/embed/4AQrH9OCal0?autoplay=1&loop=1&playlist=4AQrH9OCal0&mute=1"; // Mute activado
  document.getElementById("videoMusica").style.display = "block"; // Mostrar el reproductor
}

// Función para reproducir música al hacer clic en el botón
function reproducirMusica() {
  iframe.src = "https://www.youtube.com/embed/4AQrH9OCal0?autoplay=1&loop=1&playlist=4AQrH9OCal0&mute=0"; // Desactivar mute
  playMusicBtn.disabled = true; // Deshabilitar el botón después de hacer clic
  playMusicBtn.innerText = "Música Reproduciéndose"; // Cambiar texto del botón
}

window.addEventListener("load", () => {
  iniciarMusica(); // música comienza automáticamente al cargar la página
});

// Evento para el botón de reproducción
playMusicBtn.addEventListener("click", reproducirMusica);
