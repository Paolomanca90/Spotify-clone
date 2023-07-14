/* -----------------------THIS FUNCTION CHANGES ICON OF THE HEART ICON AT BIGGER BREAKPOINTS FROM "EMPTY" to "FILLED" ---------------------*/

const heartIconBig = document.getElementById("heartIconBig")
let isFilledBig = false

heartIconBig.addEventListener("click", function () {
  if (isFilledBig) {
    heartIconBig.classList.remove("bi-heart-fill")

    heartIconBig.innerHTML = ""
    heartIconBig.className = "bi bi-heart mx-2"

    isFilledBig = false
  } else {
    heartIconBig.classList.add("bi-heart-fill")

    heartIconBig.innerHTML = ""
    heartIconBig.className = "bi bi-heart-fill mx-2"

    isFilledBig = true
  }
})

/* -----------------------THIS FUNCTION CHANGES ICON OF THE HEART AT SMALLER BREAKPOINTS FROM "EMPTY" to "FILLED" ---------------------*/

const heartIcon = document.getElementById("heartIcon")
let isFilled = false

heartIcon.addEventListener("click", function () {
  if (isFilled) {
    heartIcon.classList.remove("bi-heart-fill")

    heartIcon.innerHTML = ""
    heartIcon.className = "bi bi-heart mx-2"

    isFilled = false
  } else {
    heartIcon.classList.add("bi-heart-fill")

    heartIcon.innerHTML = ""
    heartIcon.className = "bi bi-heart-fill mx-2"

    isFilled = true
  }
})

/* -----------------------THIS FUNCTION CHANGES THE SHUFFLE ICON COLOR FROM WHITE TO GREEN (AND VICE VERSA) ---------------------*/

const repeatIcon = document.getElementById("repeatIcon")
const colorToggleRepeat = document.getElementById("colorToggleRepeat")
let isWhiteRepeat = true

colorToggleRepeat.addEventListener("click", function () {
  if (isWhiteRepeat) {
    repeatIcon.style.color = "#34cb1d"
    isWhiteRepeat = false
  } else {
    repeatIcon.style.color = "#ffffff"
    isWhiteRepeat = true
  }
})

/* -----------------------THIS FUNCTION CHANGES THE REPEAT ICON COLOR FROM WHITE TO GREEN (AND VICE VERSA) ---------------------*/

const shuffleIcon = document.getElementById("shuffleIcon")
const colorToggleShuffle = document.getElementById("colorToggleShuffle")
let isWhiteShuffle = true

colorToggleShuffle.addEventListener("click", function () {
  if (isWhiteShuffle) {
    shuffleIcon.style.color = "#34cb1d"
    isWhiteShuffle = false
  } else {
    shuffleIcon.style.color = "#ffffff"
    isWhiteShuffle = true
  }
})

/* -----------------------THIS FUNCTION CHANGES THE SVG FROM "PLAY" to "PAUSE" --------------------- */

const playPauseIcon = document.getElementById("playPause")
playPauseIcon.addEventListener("click", function () {
  playPauseIcon.classList.toggle("bi-play-circle-fill")
  playPauseIcon.classList.toggle("bi-pause-circle-fill")
})

/* JS TO MAKE THE MD AND SM PLAY/PAUSE BUTTON CHANGE AT CLICK*/

const playPauseSmallIcon = document.getElementById("playPauseSmall")

//
//
// FUNZIONI PLAYER

const btnPlay = document.getElementById("playPause")
const audioElement = document.querySelector("audio")
let playing = false
btnPlay.addEventListener("click", () => {
  //check audio is playing
  if (!audioElement.paused) {
    audioElement.pause()
  } else {
    audioElement.play()
  }
})

// VOLUME
const input = document.querySelector("#volume")
audioElement.volume = 0.2
input.addEventListener("change", (event) => {
  audioElement.volume = event.target.value / 100
})

// TIME SONG
const playerCurrentTime = document.querySelector("#songStartPoint")
const playerSongDuration = document.querySelector("#songEndPoint")

audioElement.addEventListener("timeupdate", () => {
  /////Song duration////
  let minutes = parseInt(audioElement.duration / 60, 10)
  let seconds = parseInt(audioElement.duration % 60)
  if (minutes < 10) {
    minutes = minutes
  }
  playerSongDuration.textContent = minutes + ":" + seconds

  /////Passed time////
  let mins = Math.floor(audioElement.currentTime / 60)
  if (mins < 10) {
    mins = String(mins)
  }
  let secs = Math.floor(audioElement.currentTime % 60)
  if (secs < 10) {
    secs = "0" + String(secs)
  }
  playerCurrentTime.textContent = mins + ":" + secs
  /////Progress////
  progressUpdate()
})

// PLAYER PROGRESS
const progressFilled = document.querySelector(".player-progress-filled")
function progressUpdate() {
  const percent = (audioElement.currentTime / audioElement.duration) * 100
  progressFilled.style.flexBasis = `${percent}%`
}

// RESET PLAYER
audioElement.addEventListener("ended", () => {
  btnPlay.dataset.playing = "false"
  // playPauseIcon.classList.toggle("bi-play-circle-fill");
  // playPauseIcon.classList.toggle("bi-pause-fill");
  progressFilled.style.flexBasis = "0%"
  audioElement.currentTime = 0
  audioElement.duration = audioElement.duration
})

// SCRUB PLAYER TIMELINE
const progress = document.querySelector(".player-progress")

let mousedown = false
function scrub(event) {
  const scrubTime =
    (event.offsetX / progress.offsetWidth) * audioElement.duration
  audioElement.currentTime = scrubTime
}
progress.addEventListener("click", scrub)
progress.addEventListener("mousemove", (e) => mousedown && scrub(e))
progress.addEventListener("mousedown", () => (mousedown = true))
progress.addEventListener("mouseup", () => (mousedown = false))
