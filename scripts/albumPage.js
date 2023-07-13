const UrlAlbums = "https://striveschool-api.herokuapp.com/api/deezer/album/";
const addressBarContent = new URLSearchParams(location.search);
const albumId = addressBarContent.get("id");
const coverAlbumRef = document.getElementById("cover-album")
const albumNameRef = document.getElementById("album-name")
const albumInfoRef = document.getElementById("album-info")

fetch(UrlAlbums + albumId)
    .then((data) => {
        if (data.ok) {
            return data.json()
        } else {
            throw new Error("Errore nella chiamata API")
        }
    })
    .then((album)=>{
        console.log("album", album.cover_medium)
        coverAlbumRef.style.backgroundImage = `url(${album.cover_medium})`
        coverAlbumRef.style.backgroundSize = "cover"
        coverAlbumRef.style.height = "250px"
        coverAlbumRef.style.width = "250px"
        albumNameRef.innerText = `${album.title}`
        albumInfoRef.innerText = `${album.artist.name} • ${album.release_date} • ${album.nb_tracks} brani`
        
    })
    .catch((err)=>{
        console.log(err)
    })
