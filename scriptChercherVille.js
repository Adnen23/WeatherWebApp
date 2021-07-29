import { getWeatherNow } from "./scriptGetWeatherNow.js";
import { getWeatherHourly } from "./scriptGetWeatherHourly.js";
import { getWeatherDaily } from "./scriptGetWeatherDaily.js";
import { getPrayerTime } from "./scriptGetPrayerTime.js";
import { errorText } from "./scriptLocalisation.js";

var key = "dd926d971013aa0a900f7351eb7b0d58";
var villeInput = document.querySelector("#villeName").value;

export async function chercherVille(ville) {
    const response1 = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=" + key + "&lang=fr&units=metric")
    const data1 = await response1.json();
    var errorMessage = document.getElementById("errorMsg");

    if (data1.cod == 404) {
        errorMessage.className = errorText.errorVilleIntrouvable.msgClassName;
        errorMessage.innerHTML = errorText.errorVilleIntrouvable.msg;
    }
    else if (data1.cod == 400) {
        errorMessage.className = errorText.errorChampVille.msgClassName;
        errorMessage.innerHTML = errorText.errorChampVille.msg;
    }
    else
    {
    
    //Récupérer la latitude et la longitude
    var a = data1.coord.lat;
    var b = data1.coord.lon;
    var toDay = new Date();
    var c = toDay.getMonth() + 1;
    var d = toDay.getFullYear(); 
    console.log(a + ' + ' + b);
    //Live météo by namme
    getWeatherNow(a, b);
    getWeatherHourly(a, b);
    getWeatherDaily(a, b);
    console.log(c);
    getPrayerTime(a, b, c, d);
}
}