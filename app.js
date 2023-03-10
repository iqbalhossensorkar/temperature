const API_KEY = ``

const loadTemperatureCity = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data))
}

const displayTemp = data => {
    setInnerTextById('temp', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
    console.log(data.weather[0].main);
}

const setInnerTextById = (id, text) => {
    const temp = document.getElementById(id);
    temp.innerText = text;
}

document.getElementById('search-btn').addEventListener('click', function(){
    const inputField = document.getElementById('search-field');
    const city = inputField.value;

    document.getElementById('city').innerText = city;

    loadTemperatureCity(city);
})
loadTemperatureCity('dhaka');


