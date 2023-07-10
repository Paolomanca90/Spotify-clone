const firstRow = document.getElementById("first-row")
const Url = "https://striveschool-api.herokuapp.com/api/deezer/album/"

const choosenAlbums = [975682572, 151684662, 1247956402, 113948126, 2351917235, 67860535]


const getAlbum = function() {
    choosenAlbums.forEach((el) =>{
        fetch(Url + el)
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
                <div class="d-flex align-items-center rounded border">
                <img class="rounded-start" src="${data.cover_small}" alt="cover" />
                <h4 class="m-0 ps-1"> ${data.title}</h4>
                </div>
                `

                firstRow.appendChild(newCol)
            }) 
            .catch((err) => {
                console.log("ERR", err)
            }) 
        }
    )}


    getAlbum()
// const getAlbum = funtion (){
//     choosenAlbums.forEach((el) => {

//     })
// }