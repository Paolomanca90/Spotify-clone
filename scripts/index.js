const firstRow = document.getElementById("first-row")
const secondRow = document.getElementById("second-row")
const albumUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/"

const choosenAlbums = [90271, 113477, 233425292, 78536192, 333896337, 121532]
const forYouAlbum = [90271, 113477, 233425292, 78536192]
// const randomAlbums = function(){
//     for (let i=0; i<6; i++){
//         let num = Math.floor(Math.random()*200000000) + 150000000
//         choosenAlbums.push(num)
//     }
// }

// randomAlbums()

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

getAlbum()


// ciclo da 1 a 4 con .then alla fine di ognuno
// promiseAll
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
            .then((data,) => {
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

createForYou()