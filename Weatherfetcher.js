export default async function getWeather(city){
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=08de0cde0572b04bb87fca78f515ea85`;
    var response = await fetch(url);
    var json = await response.json();
    return json.cod == "200" ? formatData(json) : null;
}

function formatData(data){  
    return {
        icon : `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        Condition : data.weather[0].description,
        City : data.name,
        "Current Temperature" : `${toFah(data.main.temp)}, ${toCel(data.main.temp)}, ${toKel(data.main.temp)}`,
        "Feels Like" : `${toFah(data.main.feels_like)}, ${toCel(data.main.feels_like)}, ${toKel(data.main.feels_like)}`,
        Min : `${toFah(data.main.temp_min)}, ${toCel(data.main.temp_min)}, ${toKel(data.main.temp_min)}`,
        Max : `${toFah(data.main.temp_max)}, ${toCel(data.main.temp_max)}, ${toKel(data.main.temp_max)}`,
        Wind: `${data.wind.speed}mph, ${data.wind.deg}\xB0`
    }
}

function toKel(kelvin){
    return `${kelvin}\xB0K`;
}

function toFah(kelvin){
    return `${Math.round((((kelvin - 273.15) * 9) / 5) + 32)}\xB0F`;
}

function toCel(kelvin){
    return `${Math.round(kelvin - 273.15)}\xB0C`;
}