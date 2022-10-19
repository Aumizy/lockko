function getPosition () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            h1.innerHTML = "Location: Longitude " + position.coords.longitude + "\n" + 
            "Latitude: " + position.coords.latitude
            console.log(position);
        })
    } else {
        console.log("api not supported");
    }

}

const h1 = document.querySelector('h1')
const btn = document.querySelector('button')
const html = document.querySelector('html')
const attBtn = document.querySelector('#att-btn')
btn.addEventListener('click', getPosition);
attBtn.addEventListener('click', markAttendance);
window.onload = getUserPosition;
const defaultLatitude = 9.05535;
const defaultLongitude = 7.48496;

let userPosition;
let positionDetail;

function getUserPosition () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(chek)
    }
}

function chek (position) {
    positionDetail = position
    userPosition = {
        latitude : position.coords.latitude,
        longitude : position.coords.longitude
    }
    // h1.innerHTML = "latitude: " + userPosition.latitude + "longitude: " + userPosition.longitude;
    console.log(userPosition);
    console.log(positionDetail);
    return userPosition
    // userPosition = getPosition();
}

function markAttendance () {
    if ((userPosition.latitude <= 7.48600) && (userPosition.longitude >= 7.48400) && (userPosition.longitude <= 9.05600) && (userPosition.longitude >= 9.05300) ) {
        window.location.replace('wrongloc.html');
    } else {
        window.location.replace('takeatt.html')
    }
}




