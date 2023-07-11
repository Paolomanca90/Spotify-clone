const firstRow = document.getElementById("first-row")
const secondRow = document.getElementById("second-row")
const thirdRow = document.getElementById("third-row")
const fourthRow = document.getElementById("fourth-row")
const searchUrl = "https://striveschool-api.herokuapp.com/api/deezer/search?q=rock"
const albumUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/"

const choosenAlbums = []
const forYouAlbum = []
const mixAlbum = []
const recentAlbum = []

const randomAlbums = function(){
    fetch(searchUrl)
        .then((res)=>{
            if(res.ok){
                return res.json()
            }else{
                throw new Error()
            }
        })
        .then((data)=>{
            for (let i=0; i<6; i++){
                let num = Math.floor(Math.random()*data.data.length)
                choosenAlbums.push(data.data[num].album.id)
            }
            getAlbum()  
        })
        .catch((err)=>{
            console.log(err)
        })
}
randomAlbums()

const randomForYou = function(){
    fetch(searchUrl)
        .then((res)=>{
            if(res.ok){
                return res.json()
            }else{
                throw new Error()
            }
        })
        .then((data)=>{
            for (let i=0; i<4; i++){
                let num = Math.floor(Math.random()*data.data.length)
                forYouAlbum.push(data.data[num].album.id)   
            } 
            createForYou() 
        })
        .catch((err)=>{
            console.log(err)
        })
}
randomForYou()

const getAlbum = function() {
    choosenAlbums.forEach((el) =>{
        fetch(albumUrl + el)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error ("Errore nel recupero dei dati")
                }
            })
            .then((data) => {
                let newCol = document.createElement("div")
                newCol.classList.add("col", "col-6", "col-lg-4")
                newCol.innerHTML= `
                <div class="d-flex align-items-center rounded shadow">
                <img class="rounded-start" src="${data.cover_small}" alt="cover" />
                <h6 class="m-0 ps-1"> ${data.title}</h6>
                </div>
                `

                firstRow.appendChild(newCol)
            }) 
            .catch((err) => {
                console.log("ERR", err)
            }) 
        }
    )
}

const createForYou = function() {
    forYouAlbum.forEach((el,i) =>{
        fetch(albumUrl + el)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error ("Errore nel recupero dei dati")
                }
            })
            .then((data) => {
                let newCol = document.createElement("div")
                newCol.classList.add("col", "col-6", "col-lg-3")
                newCol.innerHTML= `
                <div class="card rounded-2 h-100 p-3 text-bg-dark">
                    <img src="${data.cover_medium}" class="card-img rounded-2" alt="cover">
                    <div class="card-body p-0 mt-2">
                        <h5 class="card-title p-0">Daily Mix ${i+1}</h5>
                        <p class="card-text p-0">${data.title}</p>
                    </div>
                </div>
                `

                secondRow.appendChild(newCol)
            }) 
            .catch((err) => {
                console.log("ERR", err)
            }) 
        }
    )
}

const mixAlbums = function(){
    fetch(searchUrl)
        .then((res)=>{
            if(res.ok){
                return res.json()
            }else{
                throw new Error()
            }
        })
        .then((data)=>{
            for (let i=0; i<4; i++){
                let num = Math.floor(Math.random()*data.data.length)
                mixAlbum.push(data.data[num].album.id)   
            } 
            mixForYou() 
        })
        .catch((err)=>{
            console.log(err)
        })
}
mixAlbums()

const mixForYou = function() {
    mixAlbum.forEach((el) =>{
        fetch(albumUrl + el)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error ("Errore nel recupero dei dati")
                }
            })
            .then((data) => {
                let newCol = document.createElement("div")
                newCol.classList.add("col", "col-6", "col-lg-3")
                newCol.innerHTML= `
                <div class="card rounded-2 h-100 p-3 text-bg-dark">
                    <img src="${data.cover_medium}" class="card-img rounded-2" alt="cover">
                    <div class="card-body p-0 mt-2">
                        <h5 class="card-title p-0">Mix ${data.artist.name}</h5>
                        <p class="card-text p-0">${data.title}</p>
                    </div>
                </div>
                `

                thirdRow.appendChild(newCol)
            }) 
            .catch((err) => {
                console.log("ERR", err)
            }) 
        }
    )
}

const recentAlbums = function(){
    fetch(searchUrl)
        .then((res)=>{
            if(res.ok){
                return res.json()
            }else{
                throw new Error()
            }
        })
        .then((data)=>{
            for (let i=0; i<4; i++){
                let num = Math.floor(Math.random()*data.data.length)
                recentAlbum.push(data.data[num].album.id)   
            } 
            recentForYou() 
        })
        .catch((err)=>{
            console.log(err)
        })
}
recentAlbums()

const recentForYou = function() {
    recentAlbum.forEach((el) =>{
        fetch(albumUrl + el)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error ("Errore nel recupero dei dati")
                }
            })
            .then((data) => {
                let newCol = document.createElement("div")
                newCol.classList.add("col", "col-6", "col-lg-3")
                newCol.innerHTML= `
                <div class="card rounded-2 h-100 p-3 text-bg-dark">
                    <img src="${data.cover_medium}" class="card-img rounded-2" alt="cover">
                    <div class="card-body p-0 mt-2">
                        <h5 class="card-title p-0">${data.artist.name}</h5>
                        <p class="card-text p-0">${data.title}</p>
                    </div>
                </div>
                `

                fourthRow.appendChild(newCol)
            }) 
            .catch((err) => {
                console.log("ERR", err)
            }) 
        }
    )
}