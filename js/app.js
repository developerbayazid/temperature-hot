const API_KEY = '9921a39c3bd59d5a2da09eef4ba1e7ca';
const searchTemperature = () => {
    const cityName = document.getElementById('location').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = (temperature) => {
    if(temperature.name){
        setInnerText('city-name', temperature.name);
        setInnerText('temperature', temperature.main.temp);
        setInnerText('condition', temperature.weather[0].main);
    } else {
        setInnerText('city-name', temperature.message);
    }

    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}