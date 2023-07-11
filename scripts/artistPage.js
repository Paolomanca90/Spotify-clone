const Url =  "https://striveschool-api.herokuapp.com/api/deezer/artist/0003"


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




const getData = function(){
    fetch(Url, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3ZWZmYzEyYjUwYzAwMTQ5ZTUxODEiLCJpYXQiOjE2ODg5ODMzNzYsImV4cCI6MTY5MDE5Mjk3Nn0.lP7ejFmSeu5EV9ixrJDPJmBkMJ_3UPKq20ukGcuVC9E",
        "Content-Type" : "application/json",
        }
        })
    .then((res) => {
        if(res.ok){
            return res.json()
        } else {
            throw new Error ("Errore nella chiamata API")
        }
    })
    .then ((artists) => {
        console.log("artists", artists)
    })
    .catch((err) => {
        console.log(err)
    })
}


getData()
showPlaylist()
