// // Sincronizar las letras con la canción
// var audio = document.querySelector("audio");
// var lyrics = document.querySelector("#lyrics");

// // Array de objetos que contiene cada línea y su tiempo de aparición en segundos
// var lyricsData = [
//   { text: "Y hace falta que te diga", time: 17},
//   { text: "¿Qué me muero por tener algo contigo?", time: 20 },
//   { text: "Y es que no te has dado cuenta", time: 27 },
//   { text: "¿De lo mucho que me cuesta ser tu amigo?", time: 29 },
 
//   { text: "Ya no puedo acercarme a tu boca", time: 35 },
//   { text: "Sin deseártela de una manera loca", time: 40 },
//   { text: "Necesito controlar tu vida", time: 44 },
//   { text: "Saber quién te besa y quién te abriga", time: 47 },
//   { text: "Y hace falta que te diga", time: 54 },
//   { text: "¿Qué me muero por tener algo contigo?", time: 57 },
//   { text: "Y es que no te has dado cuenta", time: 64 },
//   { text: "¿De lo mucho que me cuesta ser tu amigo?", time: 66 },
//   { text: "Ya me quedan muy pocos caminos", time: 72 },
//   { text: "Y aunque pueda parecerte un desatino", time: 77 },
//   { text: "No quisiera yo morirme sin tener algo contigo", time: 82 },
//   { text: "", time: 91 },
//   { text: "Ya no puedo continuar espiando", time: 109},
//   { text: "Día y noche y tú llegar adivinando", time: 114 },
//   { text: "Ya no sé con qué inocente excusa pasar por tu casa", time: 119 },
//   { text: "Y me quedan muy pocos caminos", time: 128 },
//   { text: "Y aunque pueda parecerte un desatino", time: 133 },
//   { text: "No quisiera yo morirme sin tener algo contigo", time: 137 },
//   { text: "", time: 150 }, // Pausa
//   { text: "Ya no puedo continuar espiando", time: 245 },
//   { text: "Día y noche y tú llegar adivinando", time: 249 },
//   { text: "Ya no sé con qué inocente excusa pasar por tu casa", time: 255 },
//   { text: "Y me quedan muy pocos caminos", time: 262 },
//   { text: "Y aunque pueda parecerte un desatino", time: 267 },
//   { text: "No quisiera yo morirme sin tener algo contigo", time: 271 },

//   { text: "Algo contigo", time: 280 },
//   { text: "Algo contigo", time: 287 },
// ];

// // Animar las letras
// function updateLyrics() {
//   var time = Math.floor(audio.currentTime);
//   var currentLine = lyricsData.find(
//   (line, i) => time >= line.time && (i === lyricsData.length - 1 || time < lyricsData[i + 1].time)
// );

//   if (currentLine) {
//     // Calcula la opacidad basada en el tiempo en la línea actual
//     var fadeInDuration = 1.5; // Duración del efecto de aparición en segundos
//     var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

//     // Aplica el efecto de aparición
//     lyrics.style.opacity = opacity;
//     lyrics.innerHTML = currentLine.text;
//   } else {
//     // Restablece la opacidad y el contenido si no hay una línea actual
//     lyrics.style.opacity = 0;
//     lyrics.innerHTML = "";
//   }
// }

// setInterval(updateLyrics, 1000);

// //funcion titulo
// // Función para ocultar el título después de 216 segundos
// function ocultarTitulo() {
//   var titulo = document.querySelector(".titulo");
//   titulo.style.animation =
//     "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
//   setTimeout(function () {
//     titulo.style.display = "none";
//   }, 3000); // Espera 3 segundos antes de ocultar completamente
// }

// // Llama a la función después de 216 segundos (216,000 milisegundos)
// setTimeout(ocultarTitulo, 216000);

// --- Audio + Autoplay unlock ---
const audio  = document.getElementById("bgm");
const lyrics = document.getElementById("lyrics");
const btn    = document.getElementById("start-audio");

// Intento de reproducción al cargar
async function tryPlay() {
  try {
    await audio.play();
    btn.style.display = "none";
  } catch (_) {
    // Autoplay bloqueado -> mostrar botón
    btn.style.display = "inline-block";
  }
}
document.addEventListener("DOMContentLoaded", tryPlay);

// Primer gesto del usuario desbloquea
async function unlock() {
  if (audio.paused) {
    try { await audio.play(); } catch(_) {}
  }
  btn.style.display = audio.paused ? "inline-block" : "none";
  ["click","touchend","keydown","pointerdown"].forEach(ev =>
    window.removeEventListener(ev, unlock)
  );
}
["click","touchend","keydown","pointerdown"].forEach(ev =>
  window.addEventListener(ev, unlock, { once: true })
);
btn.addEventListener("click", unlock);

// --- Sincronizar letras ---
const lyricsData = [
  { text: "Y hace falta que te diga", time: 17},
  { text: "¿Qué me muero por tener algo contigo?", time: 20 },
  { text: "Y es que no te has dado cuenta", time: 27 },
  { text: "¿De lo mucho que me cuesta ser tu amigo?", time: 29 },
  { text: "Ya no puedo acercarme a tu boca", time: 35 },
  { text: "Sin deseártela de una manera loca", time: 40 },
  { text: "Necesito controlar tu vida", time: 44 },
  { text: "Saber quién te besa y quién te abriga", time: 47 },
  { text: "Y hace falta que te diga", time: 54 },
  { text: "¿Qué me muero por tener algo contigo?", time: 57 },
  { text: "Y es que no te has dado cuenta", time: 64 },
  { text: "¿De lo mucho que me cuesta ser tu amigo?", time: 66 },
  { text: "Ya me quedan muy pocos caminos", time: 72 },
  { text: "Y aunque pueda parecerte un desatino", time: 77 },
  { text: "No quisiera yo morirme sin tener algo contigo", time: 82 },
  { text: "", time: 91 },
  { text: "Ya no puedo continuar espiando", time: 109},
  { text: "Día y noche y tú llegar adivinando", time: 114 },
  { text: "Ya no sé con qué inocente excusa pasar por tu casa", time: 119 },
  { text: "Y me quedan muy pocos caminos", time: 128 },
  { text: "Y aunque pueda parecerte un desatino", time: 133 },
  { text: "No quisiera yo morirme sin tener algo contigo", time: 137 },
  { text: "", time: 150 },
  { text: "Ya no puedo continuar espiando", time: 245 },
  { text: "Día y noche y tú llegar adivinando", time: 249 },
  { text: "Ya no sé con qué inocente excusa pasar por tu casa", time: 255 },
  { text: "Y me quedan muy pocos caminos", time: 262 },
  { text: "Y aunque pueda parecerte un desatino", time: 267 },
  { text: "No quisiera yo morirme sin tener algo contigo", time: 271 },
  { text: "Algo contigo", time: 280 },
  { text: "Algo contigo", time: 287 },
];

function updateLyrics() {
  const t = audio.currentTime;
  // Encuentra la última línea cuyo time <= t
  let i = lyricsData.findIndex((line, idx) =>
    t >= line.time && (idx === lyricsData.length - 1 || t < lyricsData[idx + 1].time)
  );
  if (i !== -1) {
    const line = lyricsData[i];
    const fadeIn = 1.5;
    const opacity = Math.min(1, Math.max(0, (t - line.time) / fadeIn));
    if (lyrics.innerHTML !== line.text) lyrics.innerHTML = line.text;
    lyrics.style.opacity = opacity;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Mucho más preciso que setInterval:
audio.addEventListener("timeupdate", updateLyrics);

// --- Ocultar título a los 216s ---
function ocultarTitulo() {
  const titulo = document.querySelector(".titulo");
  if (!titulo) return;
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(() => { titulo.style.display = "none"; }, 3000);
}
setTimeout(ocultarTitulo, 216000);
