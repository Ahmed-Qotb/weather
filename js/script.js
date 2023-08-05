// child 1
let fstDay = document.querySelector('.fstDay');
let fstDate = document.querySelector('.fstDate');
let city = document.querySelector('.city');
let temp = document.querySelector('.temp');
let iconTemp = document.querySelector('.iconTemp');
let condition = document.querySelector('.condition');
let list = [];
let searchBtn = document.querySelector('search-button');
let search = document.getElementById('search');




async function getWeather(x) {
    list = await fetch(`http://api.weatherapi.com/v1/current.json?key=a095658fda9b4fe6810150345230308&q=${x}`)
    let datalist = await list.json();
    console.log(datalist);
    city.innerHTML = datalist.location.name;
    temp.innerHTML = datalist.current.feelslike_c;
    condition.innerHTML = datalist.current.condition.text;
    condition.innerHTML = datalist.current.condition.text;
    iconTemp.setAttribute('src', datalist.current.condition.icon);
}
getWeather('cairo')

search.addEventListener('keyup', function () {
    getWeather(search.value)
})