/* ==============================
   MUSIK BACKGROUND
============================== */

const bgMusic = document.getElementById("bgMusic");

function startBackgroundMusic() {
  if (!bgMusic) return;

  bgMusic.volume = 0.7;
  const musicPromise = bgMusic.play();

  if (musicPromise !== undefined) {
    musicPromise.catch(() => {
      // Browser memblokir autoplay.
      // Musik akan dimulai saat pengguna melakukan klik pertama.
    });
  }
}

// Coba putar otomatis saat halaman dibuka.
window.addEventListener("load", () => {
  startBackgroundMusic();
});

// Browser biasanya mengizinkan audio setelah interaksi pengguna.
// Klik pertama akan menjalankan musik jika masih paused.
document.addEventListener("click", () => {
  if (bgMusic && bgMusic.paused) {
    bgMusic.play().catch(() => {});
  }
}, { once: true });


/* ==============================
   MENGAMBIL ELEMENT HTML
============================== */

const home = document.getElementById("home");
const tease = document.getElementById("tease");
const letterPage = document.getElementById("letterPage");
const openEnvelope = document.getElementById("openEnvelope");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const backBtn = document.getElementById("backBtn");


/* ==============================
   FUNGSI PINDAH HALAMAN
============================== */

function showPage(page) {
  home.classList.remove("active");
  tease.classList.remove("active");
  letterPage.classList.remove("active");
  page.classList.add("active");
}


/* ==============================
   KLIK AMPLOP
============================== */

openEnvelope.addEventListener("click", function () {
  showPage(letterPage);
});


/* ==============================
   KLIK YES
============================== */

yesBtn.addEventListener("click", function () {
  showPage(letterPage);
});


/* ==============================
   KLIK NO
============================== */

noBtn.addEventListener("click", function () {
  showPage(tease);
});


/* ==============================
   TOMBOL KEMBALI
============================== */

backBtn.addEventListener("click", function () {
  showPage(home);
});


/* ==============================
   TOMBOL NO BERGERAK
============================== */

noBtn.addEventListener("mouseenter", function () {
  const x = Math.random() * 80 - 40;
  const y = Math.random() * 35 - 17;

  noBtn.style.transform =
    "translate(" + x + "px, " + y + "px)";
});
