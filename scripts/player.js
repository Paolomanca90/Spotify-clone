/* -----------------------THIS FUNCTION CHANGES ICON OF THE HEART ICON AT BIGGER BREAKPOINTS FROM "EMPTY" to "FILLED" ---------------------*/

const heartIconBig = document.getElementById("heartIconBig");
let isFilledBig = false;

heartIconBig.addEventListener("click", function () {
  if (isFilledBig) {
    heartIconBig.classList.remove("bi-heart-fill");

    heartIconBig.innerHTML = "";
    heartIconBig.className = "bi bi-heart mx-2";

    isFilledBig = false;
  } else {
    heartIconBig.classList.add("bi-heart-fill");

    heartIconBig.innerHTML = "";
    heartIconBig.className = "bi bi-heart-fill mx-2";

    isFilledBig = true;
  }
});

/* -----------------------THIS FUNCTION CHANGES ICON OF THE HEART AT SMALLER BREAKPOINTS FROM "EMPTY" to "FILLED" ---------------------*/

const heartIcon = document.getElementById("heartIcon");
let isFilled = false;

heartIcon.addEventListener("click", function () {
  if (isFilled) {
    heartIcon.classList.remove("bi-heart-fill");

    heartIcon.innerHTML = "";
    heartIcon.className = "bi bi-heart mx-2";

    isFilled = false;
  } else {
    heartIcon.classList.add("bi-heart-fill");

    heartIcon.innerHTML = "";
    heartIcon.className = "bi bi-heart-fill mx-2";

    isFilled = true;
  }
});

/* -----------------------THIS FUNCTION CHANGES THE SHUFFLE ICON COLOR FROM WHITE TO GREEN (AND VICE VERSA) ---------------------*/

const repeatIcon = document.getElementById("repeatIcon");
const colorToggleRepeat = document.getElementById("colorToggleRepeat");
let isWhiteRepeat = true;

colorToggleRepeat.addEventListener("click", function () {
  if (isWhiteRepeat) {
    repeatIcon.style.color = "#34cb1d";
    isWhiteRepeat = false;
  } else {
    repeatIcon.style.color = "#ffffff";
    isWhiteRepeat = true;
  }
});

/* -----------------------THIS FUNCTION CHANGES THE REPEAT ICON COLOR FROM WHITE TO GREEN (AND VICE VERSA) ---------------------*/

const shuffleIcon = document.getElementById("shuffleIcon");
const colorToggleShuffle = document.getElementById("colorToggleShuffle");
let isWhiteShuffle = true;

colorToggleShuffle.addEventListener("click", function () {
  if (isWhiteShuffle) {
    shuffleIcon.style.color = "#34cb1d";
    isWhiteShuffle = false;
  } else {
    shuffleIcon.style.color = "#ffffff";
    isWhiteShuffle = true;
  }
});

/* -----------------------THIS FUNCTION CHANGES THE SVG FROM "PLAY" to "PAUSE" --------------------- */

const playPauseIcon = document.getElementById("playPause");
playPauseIcon.addEventListener("click", function () {
  playPauseIcon.classList.toggle("bi-play-circle-fill");
  playPauseIcon.classList.toggle("bi-pause-circle-fill");
});

/* JS TO MAKE THE MD AND SM PLAY/PAUSE BUTTON CHANGE AT CLICK*/

const playPauseSmallIcon = document.getElementById("playPauseSmall");
playPauseSmallIcon.addEventListener("click", function () {
  playPauseSmallIcon.classList.toggle("bi-play-fill");
  playPauseSmallIcon.classList.toggle("bi-pause-fill");
});

/* ------------------------ LEFT SIDE TAKE IMAGE, SONG TITLE & ARTIST NAME -----------------*/

// FUNZIONI PLAYER

const audioElement = document.querySelector("audio");
console.log(audioElement);
const audioCtx = new AudioContext();
const track = audioCtx.createMediaElementSource(audioElement);
console.log(track);
const btnPlay = document.getElementById("playPause");
btnPlay.addEventListener("click", () => {
  console.log("ciao");
  audioElement.play();
  // if (audioCtx.state === "suspended") {
  //   audioCtx.resume();
  // }
  // // Play or pause track depending on state
  // if (btnPlay.dataset.playing === "false") {
  //   audioElement.play();
  //   btnPlay.dataset.playing = "true";
  //   // playIcon.classList.add("hidden");
  //   // pauseIcon.classList.remove("hidden");
  // } else if (btnPlay.dataset.playing === "true") {
  //   audioElement.pause();
  //   btnPlay.dataset.playing = "false";
  //   // pauseIcon.classList.add("hidden");
  //   // playIcon.classList.remove("hidden");
  // }
});
