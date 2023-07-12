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

const btnPlay = document.getElementById("playPause");
const audioElement = document.querySelector("audio");
let playing = false;
btnPlay.addEventListener("click", () => {
  if (playing) {
    playing = !playing;
    audioElement.pause();
  } else {
    playing = !playing;
    audioElement.play();
  }
});

// VOLUME
const input = document.querySelector("#volume");
console.log(audioElement.volume);
input.addEventListener("change", (event) => {
  console.log(audioElement.volume);
  audioElement.volume = event.target.value;
});

// TIME SONG
const playerCurrentTime = document.querySelector("#songStartPoint");
const playerSongDuration = document.querySelector("#songEndPoint");

audioElement.addEventListener("timeupdate", () => {
  /////Song duration////
  var minutes = parseInt(audioElement.duration / 60, 10);
  var seconds = parseInt(audioElement.duration % 60);
  if (minutes < 10) {
    minutes = minutes;
  }
  playerSongDuration.textContent = minutes + ":" + seconds;

  /////Passed time////
  var mins = Math.floor(audioElement.currentTime / 60);
  if (mins < 10) {
    mins = String(mins);
  }
  var secs = Math.floor(audioElement.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }
  playerCurrentTime.textContent = mins + ":" + secs;
  /////Progress////
  progressUpdate();
});

// PLAYER PROGRESS
const progressFilled = document.querySelector(".player-progress-filled");
function progressUpdate() {
  const percent = (audioElement.currentTime / audioElement.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}
