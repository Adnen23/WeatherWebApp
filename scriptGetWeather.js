import { localiseMaPosition } from "./scriptLocalisation.js";




var key = "dd926d971013aa0a900f7351eb7b0d58";


export function getWeatherNow(lati, longi) {
    
     var apiCurrent = "https://api.openweathermap.org/data/2.5/weather?lat=" + lati + "&lon=" + longi + "&appid=" + key + "&lang=fr&units=metric";
        console.log(apiCurrent);
        fetch(apiCurrent)
            .then(function (response) {
                var dataCurrent = response.json();
                return dataCurrent;
            })
            .then(function (dataCurrent) {
                alert('hi');
                /*villeDisplay.innerHTML = dataCurrent.name + "<span id='spanCountry'>" + "  ( " + dataCurrent.sys.country + " )" + "</span>";
                document.getElementById("spanCountry").style.fontSize = "17px";
                currentTemprature.innerHTML = Math.round(dataCurrent.main.temp) + "°";
                var iconeValue = dataCurrent['weather'][0]['icon'];
                iconeCiel.src = "http://openweathermap.org/img/wn/" + iconeValue + "@2x.png";
                var textDescription = dataCurrent['weather'][0]['description'];
                detailCiel.innerHTML = textDescription.charAt(0).toUpperCase() + textDescription.substring(1).toLowerCase();
                var orientation = dataCurrent['wind']['deg'];
                if (orientation > 348.75) {
                    hh = "N";
                }
                if (orientation < 11.25) {
                    hh = "N";
                }
                else if (orientation < 33.75 && orientation > 11.25) {
                    hh = "NNE";
                }
                else if (orientation < 56.25 && orientation > 33.75) {
                    hh = "NE";
                }
                else if (orientation < 78.75 && orientation > 56.25) {
                    hh = "ENE";
                }
                else if (orientation < 101.25 && orientation > 78.75) {
                    hh = "E";
                }
                else if (orientation < 123.75 && orientation > 101.25) {
                    hh = "ESE";
                }
                else if (orientation < 146.25 && orientation > 123.75) {
                    hh = "SE";
                }
                else if (orientation < 168.75 && orientation > 146.25) {
                    hh = "SSE";
                }
                else if (orientation < 192.25 && orientation > 168.75) {
                    hh = "S";
                }
                else if (orientation < 213.75 && orientation > 192.25) {
                    hh = "SSW";
                }
                else if (orientation < 236.25 && orientation > 213.75) {
                    hh = "SW";
                }
                else if (orientation < 258.75 && orientation > 236.25) {
                    hh = "WSW";
                }
                else if (orientation < 281.25 && orientation > 258.75) {
                    hh = "W";
                }
                else if (orientation < 303.75 && orientation > 281.25) {
                    hh = "WNW";
                }
                else if (orientation < 326.25 && orientation > 303.75) {
                    hh = "NW";
                }
                else if (orientation < 348.75 && orientation > 326.25) {
                    hh = "WNW";
                }
                else {
                    console.log("else");
                }
    
                vitesseVent.innerHTML = "Vent : " + Math.round(dataCurrent.wind.speed * 3.6) + " Km/h - " + hh;
                humidite.innerHTML = "Humidité : " + Math.round(dataCurrent.main.humidity) + " %";
                heurLeveSoleil.innerHTML = "Lever soleil : " + new Date(dataCurrent.sys.sunrise * 1000).toLocaleTimeString();
                heurCoucheSoleil.innerHTML = "Coucher soleil : " + new Date(dataCurrent.sys.sunset * 1000).toLocaleTimeString();
                villeInput.style.backgroundColor = "white";*/
            })
    
}