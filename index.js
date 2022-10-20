function getPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      h1.innerHTML =
        "Location: Longitude " +
        position.coords.longitude +
        "\n" +
        "Latitude: " +
        position.coords.latitude;
      console.log(position);
    });
  } else {
    console.log("api not supported");
  }
}

const h1 = document.querySelector("h1");
const btn = document.querySelector("button");
const html = document.querySelector("html");
const attBtn = document.querySelector("#att-btn");
btn.addEventListener("click", getPosition);
attBtn.addEventListener("click", markAttendance);
window.onload = getUserPosition;
// const defaultLatitude = 9.054701;
// const defaultLongitude = 7.485451;

let userPosition;
let positionDetail;
let mainLat;
let mainLong;

function getUserPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(chek);
  }
}

function chek(position) {
  positionDetail = position;
  userPosition = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
  // h1.innerHTML = "latitude: " + userPosition.latitude + "longitude: " + userPosition.longitude;
  
  mainLat = userPosition.latitude.toFixed(6);
  mainLong = userPosition.longitude.toFixed(6);
  Number(mainLat)
  Number(mainLong)
  
  console.log(userPosition);
  console.log(mainLat, mainLong);
  return userPosition;
  // userPosition = getPosition();
}

function markAttendance() {
  if (
    (mainLat >= 9.053486 && mainLat <= 9.055653) &&
    (mainLong >= 7.485196 && mainLong <= 7.486951)
  ) {
    window.location.replace("takeatt.html");
  } else {
    // window.location.replace("takeatt.html");
    window.location.replace("wrongloc.html");
  }
}
