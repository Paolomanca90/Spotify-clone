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
