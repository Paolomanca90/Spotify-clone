const UrlArtist =  "https://striveschool-api.herokuapp.com/api/deezer/artist/"


const coverImgRef = document.getElementById("coverImageArtist")
const artistNameRef = document.getElementById("artistName")
const monthlyListenersRef = document.getElementById("monthlyListeners")

const urlSearchParams = new URLSearchParams(window.location.search)
const artistId = urlSearchParams.get("artistId")


const getArtist = function(artistId){
    fetch(UrlArtist + artistId)
    .then((artist) => {
        if(artist.ok){
            return artist.json()
        } else {
            throw new Error ("Errore nella chiamata API")
        }
    })
    .then ((artists) => {
        console.log("artists", artists)
        coverImgRef.style.backgroundImage = `url(${artists.picture_xl})`
        coverImgRef.style.backgroundSize = "cover"
        coverImgRef.style.height = "350px"
        coverImgRef.style.backgroundPositionY = "center"
        artistNameRef.innerHTML=`
        <h2>${artists.name}</h2>
        `
        monthlyListenersRef.innerHTML=`
        <h3>${artists.nb_fan} ascoltatori mensili</h3>
        `
    })
    // .then((artists) => {
    //     fetch(urlSearchParams + "/top?limit=50")
    //     .then((artists) =>{
    //         if(artists.ok){
    //             console.log("Canzoni", artists)
    //             return artists.json()
    //         } else {
    //             throw new Error ("Errore nella chiamata API")
    //         }
    //     })
    // })
    .catch((err) => {
        console.log(err)
    })
}



const playlist = ["culetto 2021", "Frah Quintale", "Be the young", "minecraft&nintendo switch", "Trallallero", "saggio vibes", "2021 lol", "Come trovare gli album", "Appendi sto child", "Che schifo Bootstrap", "Le bestemmine degli Epicoders", "Fetchati questo", "Francesco Guccini Mix", "Lucio Dalla e non fare la preziosa", "Bombe a confindustria", "Cercasi decimo per il calcetto", "Siamo tutti antifascisti", "Le magliette belle di Paolo", "La partita IVA di Paolo", "Sole a mezzanotte di Nino", "Torneo di calcetto di Antonio", "Pullman di Berlusconi", "Vacanza a Gubbio", "Saga completa Silent Hill", "Budokai Tenkaichi 2", "Radio Los Santos"]


const showPlaylist = function() {
    let ulPlaylist = document.getElementById("lista-playlist")
    playlist.forEach((playlist)=>{
        let newPlaylist = document.createElement("li")
        newPlaylist.classList.add("text-secondary")
        newPlaylist.innerHTML = `
        <a href="#" class="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover ms-2">${playlist}</a>
        `
        ulPlaylist.appendChild(newPlaylist)
    })
}






getArtist()
showPlaylist()
