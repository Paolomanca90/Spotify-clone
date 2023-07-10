const Url =  "https://striveschool-api.herokuapp.com/api/deezer/artist/0003"

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