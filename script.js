// ================================
// UBAH KATA-KATA DI SINI
// ================================
const pesan = {
  tanggal: "29/08/2026",
  salam: "Dear Love,",

  paragraf1: "Silva yang paling cantik dan imup, makasih ya udah hadir di hari-hari aku.",

  paragraf2: "Ada kamu, hal sederhana jadi lebih seru.",

  paragraf3: "Aku senang bisa kenal dan punya cerita bareng kamu.",

  paragraf4: "Aku nggak banyak janji, tapi aku tulus sayang sama kamu.",

  paragraf5: "Tetap jadi Silva yang aku kenal ya sayang, dan jangan lupa bahagia.",

  paragraf6: "Makasih udah pernah jadi bagian dari cerita aku. ❤️",

  penutup: "Yours forever,<br>Fauzan ❤️"
};

// Isi teks surat
document.getElementById("date").textContent = pesan.tanggal;
document.getElementById("greeting").textContent = pesan.salam;
document.getElementById("message1").textContent = pesan.paragraf1;
document.getElementById("message2").textContent = pesan.paragraf2;
document.getElementById("message3").textContent = pesan.paragraf3;
document.getElementById("message4").textContent = pesan.paragraf4;
document.getElementById("message5").textContent = pesan.paragraf5;
document.getElementById("message6").textContent = pesan.paragraf6;
document.getElementById("signature").innerHTML = pesan.penutup;

const opening = document.getElementById("opening");
const letter = document.getElementById("letter");
const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

// Dipanggil langsung oleh tombol HTML
function bukaSurat() {
  opening.style.display = "none";
  letter.style.display = "block";
  musicButton.style.display = "block";

  const paper = document.querySelector(".paper");
  paper.style.animation = "suratMasuk .8s ease forwards";

  music.play().then(function () {
    musicButton.textContent = "🔊";
  }).catch(function () {
    musicButton.textContent = "🎵";
  });
}

function toggleMusic() {
  if (music.paused) {
    music.play().then(function () {
      musicButton.textContent = "🔊";
    }).catch(function () {
      musicButton.textContent = "🎵";
    });
  } else {
    music.pause();
    musicButton.textContent = "🔇";
  }
} 
