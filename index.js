const h1 = document.querySelector("h1");
const btn = document.querySelector("button");
const html = document.querySelector("html");
const attBtn = document.querySelector("#att-btn");
btn.addEventListener("click", getPosition);
attBtn.addEventListener("click", markAttendance);

let userPosition;
let positionDetail;
let mainLat;
let mainLong;

function getPosition () {
    if (navigator.geolocation) {
        let latholder;
        let longholder;
        navigator.geolocation.getCurrentPosition((position) => {
            latholder = Number(position.coords.latitude.toFixed(6))
            longholder = Number(position.coords.longitude.toFixed(6))
            h1.innerHTML = "longitude: "+ latholder + " latitude: " + longholder;
        })
    } else {
        console.log("API not working");
    }
}

function markAttendance () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            positionDetail = position;
            mainLat = Number(position.coords.latitude.toFixed(6))
            mainLong = Number(position.coords.longitude.toFixed(6))

            console.log(userPosition);
            console.log(mainLat, mainLong);
            return userPosition;
        })
    }

    if (
        (mainLat >= 9.053200 && mainLat <= 9.055800) &&
        (mainLong >= 7.484100 && mainLong <= 7.487200)
    ) {
        window.location.replace("takeatt.html");
    } else {
        window.location.replace("wrongloc.html")
    }
}