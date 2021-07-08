//import { orientationVent } from "./orientationVent.js";
export function getWeatherNow(a, b) {

    var hh;
    var t;
    var key = "dd926d971013aa0a900f7351eb7b0d58";
    var apiCurrent = "https://api.openweathermap.org/data/2.5/weather?lat=" + a + "&lon=" + b + "&appid=" + key + "&lang=fr&units=metric";
    console.log(apiCurrent);
    fetch(apiCurrent)
        .then(function (response) {
            var dataCurrent = response.json();
            return dataCurrent;
        })
        .then(function (dataCurrent) {
            var villeDisp = document.getElementsByClassName("card-subtitle villeDisplay");
                for (let index = 0; index < villeDisp.length; index++) {
                    villeDisp[index].innerHTML = dataCurrent.name + "<span id='spanCountry'>" + "  ( " + dataCurrent.sys.country + " )" + "</span>";   
                }
            var iconeValue = dataCurrent['weather'][0]['icon'];
            document.getElementById("iconeWeatherNow").src = "http://openweathermap.org/img/wn/" + iconeValue + "@2x.png";
            var textCiel = dataCurrent['weather'][0]['description'];
            document.getElementById("skyNow").innerHTML = textCiel.charAt(0).toUpperCase() + textCiel.substring(1).toLowerCase();
            document.getElementById("temperatureNow").innerHTML = Math.round(dataCurrent.main.feels_like) + "°";
            orientationVent(dataCurrent['wind']['deg']);
            document.getElementById("detailWeatherNow").innerHTML = "Vent : " + Math.round(dataCurrent.wind.speed * 3.6) + "Km/h" + " " + hh + "<br> Humidité : " + Math.round(dataCurrent.main.humidity) + "% <br>" + "Lever de soleil : " + new Date(dataCurrent.sys.sunrise * 1000).toLocaleTimeString() + "<br> Coucher de soleil : " + new Date(dataCurrent.sys.sunset * 1000).toLocaleTimeString();
            var t1 = new Date().getMinutes();
            var t2 = new Date(dataCurrent.dt * 1000).getMinutes();
            tempIntermidiaire(t1, t2);
            document.getElementById("upDateTime").innerHTML = "<small>Last updated " + t + " mins ago</small>";
        })
    function tempIntermidiaire(t1, t2) {
        if (t2 > t1) {
            t = (t1 + 60 - t2);
        } else {
            t = (t1 - t2);
        }
    }
    
    function orientationVent(direction) {
        if (direction > 348.75) {
            hh = "N";
        }
        if (direction < 11.25) {
            hh = "N";
        }
        else if (direction < 33.75 && direction > 11.25) {
            hh = "NNE";
        }
        else if (direction < 56.25 && direction > 33.75) {
            hh = "NE";
        }
        else if (direction < 78.75 && direction > 56.25) {
            hh = "ENE";
        }
        else if (direction < 101.25 && direction > 78.75) {
            hh = "E";
        }
        else if (direction < 123.75 && direction > 101.25) {
            hh = "ESE";
        }
        else if (direction < 146.25 && direction > 123.75) {
            hh = "SE";
        }
        else if (direction < 168.75 && direction > 146.25) {
            hh = "SSE";
        }
        else if (direction < 192.25 && direction > 168.75) {
            hh = "S";
        }
        else if (direction < 213.75 && direction > 192.25) {
            hh = "SSW";
        }
        else if (direction < 236.25 && direction > 213.75) {
            hh = "SW";
        }
        else if (direction < 258.75 && direction > 236.25) {
            hh = "WSW";
        }
        else if (direction < 281.25 && direction > 258.75) {
            hh = "W";
        }
        else if (direction < 303.75 && direction > 281.25) {
            hh = "WNW";
        }
        else if (direction < 326.25 && direction > 303.75) {
            hh = "NW";
        }
        else if (direction < 348.75 && direction > 326.25) {
            hh = "WNW";
        }
        else {
            console.log("else");
        };
    }
};
/*export function getweatherId() {
    var key = "dd926d971013aa0a900f7351eb7b0d58";
    var apiCurrentId = "https://api.openweathermap.org/data/2.5/weather?id={2507475}&appid=" + key + "&lang=fr&units=metric";
    console.log(apiCurrentId);
    fetch(apiCurrentId)
        .then(function (response) {
            var dataCurrentId = response.json();
            return dataCurrentId;
        })
        .then(function (dataCurrent) {

        });
}*/