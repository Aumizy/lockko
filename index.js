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
  let convLatHolder;
  let convLongHolder;
  convLatHolder = userPosition.latitude.toFixed(6);
  convLongHolder = userPosition.longitude.toFixed(6);
  mainLat = Number(convLatHolder);
  mainLong = Number(convLongHolder);
  
  console.log(userPosition);
  console.log(mainLat, mainLong);
  return userPosition;
  // userPosition = getPosition();
}

function markAttendance() {
  if (
    (mainLat >= 9.053200 && mainLat <= 9.055800) &&
    (mainLong >= 7.484100 && mainLong <= 7.487200)
  ) {
    window.location.replace("takeatt.html");
  } else {
    // window.location.replace("takeatt.html");
    window.location.replace("wrongloc.html");
  }
}
