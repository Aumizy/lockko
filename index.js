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
const defaultLatitude = 9.0547;
const defaultLongitude = 7.485;

let userPosition;
let positionDetail;

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
  console.log(userPosition);
  console.log(positionDetail);
  return userPosition;
  // userPosition = getPosition();
}

function markAttendance() {
  if (
    userPosition.latitude <= 7.4849 &&
    userPosition.longitude >= 7.4851 &&
    userPosition.longitude <= 9.0546 &&
    userPosition.longitude >= 9.0548
  ) {
    window.location.replace("wrongloc.html");
  } else {
    window.location.replace("takeatt.html");
  }
}
