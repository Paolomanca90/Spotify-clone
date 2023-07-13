const UrlArtist = "https://striveschool-api.herokuapp.com/api/deezer/artist/";
const topSongs = "/top?limit=50";

let myUrl = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const coverImgRef = document.getElementById("coverImageArtist");
const artistNameRef = document.getElementById("artistName");
const monthlyListenersRef = document.getElementById("monthlyListeners");
const centerDiv = document.getElementById("center");

const addressBarContent = new URLSearchParams(location.search);
const artistId = addressBarContent.get("id");

const randomNumber = function () {
  let num = Math.floor(Math.random() * 5);
  return num;
};

let convert = function (value) {
  return Math.floor(value / 60) + ":" + (value % 60);
};

fetch(UrlArtist + artistId)
  .then((artist) => {
    if (artist.ok) {
      return artist.json();
    } else {
      throw new Error("Errore nella chiamata API");
    }
  })
  .then((artists) => {
    console.log("artists", artists);
    centerDiv.style.backgroundImage = `url(${artists.picture_xl})`;
    centerDiv.style.backgroundRepeat = 'no-repeat'
    centerDiv.style.backgroundSize = '150%'
    centerDiv.style.backgroundPositionY = "80%";
    centerDiv.style.backgroundPositionX = "50%";
    artistNameRef.innerHTML = `
        <h2 class="artistTitle text-light">${artists.name}</h2>
        `;
    monthlyListenersRef.innerHTML = `
        <p class="fs-6 text-light">${artists.nb_fan} ascoltatori mensili</p>
        `;
  })
  .catch((err) => {
    console.log(err);
  });

fetch(UrlArtist + artistId + topSongs)
  .then((songs) => {
    if (songs.ok) {
      return songs.json();
    } else {
      throw new Error("Errore nel caricamento delle canzoni");
    }
  })
  .then((songs) => {
    console.log(songs);
    songs.data.forEach((song) => {
      console.log("song", song);
      let singleSong = document.createElement("div");
      singleSong.classList.add("d-flex", "align-items-center", "mt-4");
      singleSong.innerHTML = `
        <div style="width:56px; height:56px; background-image:url('${
          song.album.cover_small
        }')"></div>
        <p class="text-light mb-0 ps-3">${song.title}</p>
        <p class="text-secondary ms-auto">${convert(song.duration)}</p>
        `;
      songColumn = document.getElementById("songs-column");
      songColumn.appendChild(singleSong);
    });
    console.log("Array", songs);
    let createLiked = function () {
      const randNumber = randomNumber();
      let likedSong = document.createElement("div");
      likedSong.classList.add("d-flex", "align-items-center", "mt-4");
      likedSong.innerHTML = `
        <div style="width:56px; height:56px; background-image:url('${songs.data[randNumber].album.cover_small}')"></div>
        <p class="text-light mb-0 ps-3">${songs.data[randNumber].title}</p>
        `;
      likedColumn = document.getElementById("liked-songs");
      likedColumn.appendChild(likedSong);
    };
    createLiked();
  })
  .catch((err) => {
    console.log(err);
  });

fetch(UrlArtist + artistId)
  .then((data) => {
    if (data.ok) {
      return data.json();
    } else {
      throw new Error("Errore nel caricamento delle canzoni");
    }
  })
  .then((albums) => {
    console.log("ALBUMS", albums);
  })
  .catch((err) => {
    console.log(err);
  });

const playlist = [
  "culetto 2021",
  "Frah Quintale",
  "Be the young",
  "minecraft&nintendo switch",
  "Trallallero",
  "saggio vibes",
  "2021 lol",
  "Come trovare gli album",
  "Appendi sto child",
  "Che schifo Bootstrap",
  "Le bestemmine degli Epicoders",
  "Fetchati questo",
  "Francesco Guccini Mix",
  "Lucio Dalla e non fare la preziosa",
  "Bombe a confindustria",
  "Cercasi decimo per il calcetto",
  "Siamo tutti antifascisti",
  "Le magliette belle di Paolo",
  "La partita IVA di Paolo",
  "Sole a mezzanotte di Nino",
  "Torneo di calcetto di Antonio",
  "Pullman di Berlusconi",
  "Vacanza a Gubbio",
  "Saga completa Silent Hill",
  "Budokai Tenkaichi 2",
  "Radio Los Santos",
];

const showPlaylist = function () {
  let ulPlaylist = document.getElementById("lista-playlist");
  playlist.forEach((playlist) => {
    let newPlaylist = document.createElement("li");
    newPlaylist.classList.add("text-secondary");
    newPlaylist.innerHTML = `
        <a href="#" class="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover ms-2">${playlist}</a>
        `;
    ulPlaylist.appendChild(newPlaylist);
  });
};

showPlaylist();

const sezioneCentrale = document.getElementById("center");
// ANIMAZIONE COVER
sezioneCentrale.addEventListener("scroll", () => {
  let scrollTop = sezioneCentrale.pageYOffset || sezioneCentrale.scrollTop;
  console.log("scrollTOP", scrollTop);
  document.getElementById("coverImageArtist").style.opacity =
    1 - scrollTop / 250;
});
