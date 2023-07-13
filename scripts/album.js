const UrlAlbums = "https://striveschool-api.herokuapp.com/api/deezer/albums/";
const addressBarContent = new URLSearchParams(location.search);
const albumId = addressBarContent.get("id");

fetch(UrlAlbums + albumId)
    .then((data) => {
        if (data.ok) {
            return data.json()
        } else {
            throw new Error("Errore nella chiamata API")
        }
    })
    .catch((err)=>{
        console.log(err)
    })
