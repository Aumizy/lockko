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
const defaultLatitude = 9.0578695;
const defaultLongitude = 7.4922513;

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
    if (defaultLatitude != userPosition.latitude && defaultLongitude != userPosition.longitude) {
        window.location.replace('wrongloc.html');
    } else {
        window.location.replace('takeatt.html')
    }
}



