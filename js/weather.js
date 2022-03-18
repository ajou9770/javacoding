const API_KEY = "438b03e9c624568191b6c59723cb1d27";

function onGeoOk(position) {
const lat = position.coords.latitude;
const lon = position.coords.longitude;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
fetch(url)
.then((response) => response.json())
.then((data) => {
    const name = data.name;
    const weather = data.weather[0].main;
    const Weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    Weather.innerText = name;
    city.innerText = weather;
});
}

function onGeoError () {
alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 변수를 2개 갔는데. 앞에는 성공시, 뒤에는 에러시 함수 ==> function 
