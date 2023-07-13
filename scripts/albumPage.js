const UrlAlbums = "https://striveschool-api.herokuapp.com/api/deezer/album/";
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
