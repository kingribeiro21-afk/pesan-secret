// ================================
// UBAH KATA-KATA DI SINI
// ================================
const pesan = {
  tanggal: "0625",
  salam: "Dear Love,",
  paragraf1: "Silva, kamu adalah salah satu orang yang bisa bikin hari-hari biasa terasa lebih berarti. Sederhana, tapi selalu punya cara sendiri buat bikin aku senang.",
  paragraf2: "Makasih ya, udah jadi bagian dari perjalanan cintaku. Banyak hal yang kita lewati, dan semuanya bakal tetap jadi cerita yang aku ingat..",
  paragraf3: "Aku cuma mau kamu selalu bahagia dan tetap jadi diri kamu sendiri. Jangan lupa senyum, karena aku suka lihat kamu bahagia.",
  paragraf4: "Aku nggak mau banyak janji atau kata-kata manis. Aku cuma mau bilang, kamu punya tempat yang spesial buat aku. .",
  paragraf5: "alau nanti kita sama-sama sibuk dengan kehidupan masing-masing, semoga kamu tetap ingat sama aku, Fauzan, yang pernah tulus sayang dan peduli sama kamu.",
  paragraf6: "Kalau suatu hari kamu baca ini lagi, ingat satu hal: kamu pernah sangat berarti buat aku. Semoga kamu selalu baik-baik dan bahagia. ❤️",
  penutup: "Yours forever,<br>Me ❤️"
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
