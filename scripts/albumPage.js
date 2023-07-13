const UrlAlbums = "https://striveschool-api.herokuapp.com/api/deezer/album/";
let myUrl = "https://striveschool-api.herokuapp.com/api/deezer/search?q="
const addressBarContent = new URLSearchParams(location.search);
const albumId = addressBarContent.get("id");
const coverAlbumRef = document.getElementById("cover-album")
const albumNameRef = document.getElementById("album-name")
const albumInfoRef = document.getElementById("album-info")
const songNumberRef = document.getElementById("song-number")
const songTitleRef = document.getElementById("song-title")
const songDurationRef = document.getElementById("song-duration")



let convert = function(value) {
    return Math.floor(value / 60) + ":" + (value % 60)
}




fetch(UrlAlbums + albumId)
    .then((data) => {
        if (data.ok) {
            return data.json()
        } else {
            throw new Error("Errore nella chiamata API")
        }
    })
    .then((album)=>{
        let i = 0
        console.log("album", album.cover_medium)
        coverAlbumRef.style.backgroundImage = `url(${album.cover_medium})`
        coverAlbumRef.style.backgroundSize = "cover"
        coverAlbumRef.style.height = "250px"
        coverAlbumRef.style.width = "250px"
        albumNameRef.innerText = `${album.title}`
        albumInfoRef.innerText = `${album.artist.name} • ${album.release_date} • ${album.nb_tracks} brani`  
        console.log("tracks", album.tracks)
            // crea un canvas con l'immagine e ne ritorno il context 2d
const draw = function (img) {
    let canvas = document.createElement('canvas')
    let c = canvas.getContext('2d')
    c.width = canvas.width = img.clientWidth
    c.height = canvas.height = img.clientHeight
    c.clearRect(0, 0, c.width, c.height)
    c.drawImage(img, 0, 0, img.clientWidth, img.clientHeight)
    return c
  }
  
  // scompone pixel per pixel e ritorna un oggetto con una mappa della loro frequenza nell'immagine
  const getColors = function (c) {
    let col,
      colors = {}
    let pixels, r, g, b, a
    r = g = b = a = 0
    pixels = c.getImageData(0, 0, c.width, c.height)
    for (let i = 0, data = pixels.data; i < data.length; i += 4) {
      r = data[i]
      g = data[i + 1]
      b = data[i + 2]
      a = data[i + 3]
      if (a < 255 / 2) continue
      col = rgbToHex(r, g, b)
      if (!colors[col]) colors[col] = 0
      colors[col]++
    }
    return colors
  }
  
  // trova il colore più ricorrente data una mappa di frequenza dei colori
  const findMostRecurrentColor = function (colorMap) {
    let highestValue = 0
    let mostRecurrent = null
    for (const hexColor in colorMap) {
      if (colorMap[hexColor] > highestValue) {
        mostRecurrent = hexColor
        highestValue = colorMap[hexColor]
      }
    }
    return mostRecurrent
  }
  
  // converte un valore in rgb a un valore esadecimale
  const rgbToHex = function (r, g, b) {
    if (r > 255 || g > 255 || b > 255) {
      throw 'Invalid color component'
    } else {
      return ((r << 16) | (g << 8) | b).toString(16)
    }
  }
  
  // inserisce degli '0' se necessario davanti al colore in esadecimale per renderlo di 6 caratteri
  const pad = function (hex) {
    return ('000000' + hex).slice(-6)
  }
  
  const generateImage = function () {
    // genero dinamicamente un tag <img /> in un <div> vuoto
  
    let imageSrc =
      `${album.cover_medium}`
  
    let reference = document.getElementById('center')
  
    // l'event listener "onload" nel tag <img /> si occupa di lanciare la funzione "start()" solamente
    // al termine del caricamento della src
    reference.innerHTML = `
      <img
        src=${imageSrc}
        id="img"
        crossorigin="anonymous"
        onload="start()"
      />`
  }
  
  const start = function () {
    // prendo il riferimento all'immagine del dom
    let imgReference = document.querySelector('#img')
  
    // creo il context 2d dell'immagine selezionata
    let context = draw(imgReference)
  
    // creo la mappa dei colori più ricorrenti nell'immagine
    let allColors = getColors(context)
  
    // trovo colore più ricorrente in esadecimale
    let mostRecurrent = findMostRecurrentColor(allColors)
  
    // se necessario, aggiunge degli '0' per rendere il risultato un valido colore esadecimale
    let mostRecurrentHex = pad(mostRecurrent)
  
    // console.log del risultato
    console.log(mostRecurrentHex)
  }
  
//   generateImage()
  

        album.tracks.data.forEach(song => {
            i += 1
            console.log("SONGS", song.duration)
            let songNumber = document.createElement("p")
            let songTitle = document.createElement("p")
            let songDuration = document.createElement("p")
            songNumber.classList.add("text-light")
            songTitle.classList.add("text-light")
            songDuration.classList.add("text-light")
            songTitle.innerText = `${song.title}`
            songTitleRef.appendChild(songTitle)
            songDuration.innerText = `${convert(song.duration)}`
            songDurationRef.appendChild(songDuration)
            songNumber.innerText = i
            songNumberRef.appendChild(songNumber)
        });
        

    })
    .catch((err)=>{
        console.log(err)
    })

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

    showPlaylist()

