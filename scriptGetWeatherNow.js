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
                    villeDisp[index].innerHTML = dataCurrent.name + "  ( " + dataCurrent.sys.country + " )";   
                }
                if (!document.querySelector("#iconeWeatherNow")) {
                    
                
            //Récupérer l'icone de l'état du ciel depuis l'API
            var iconeValue = dataCurrent['weather'][0]['icon'];
            //créer l'image qui contient l'icone de l'état du ciel
            var img1 = document.createElement("img");
            img1.src = "http://openweathermap.org/img/wn/" + iconeValue + "@2x.png";
            img1.alt = "Etat du ciel";
            img1.className = "rounded mx-auto d-block";
            img1.id ="iconeWeatherNow"
            //attaché l'icone de l'état du ciel à la div contenant accordion-body
            document.querySelector("#affichageNow").appendChild(img1);
            
            //créer la div qui va contenir les détails du ciel
            var div1 = document.createElement("div");
            div1.className = "card-body";
            //attaché la div1 après l'icone du ciel
            document.querySelector("#affichageNow").appendChild(div1);

            //Récupérer l'état du ciel en ce moment
            var textCiel = dataCurrent['weather'][0]['description'];
            //créer le h4 qui va contenir l'état du ciel
            var p1 = document.createElement("h4");
            p1.className = "card-title text-center";
            p1.innerHTML = textCiel.charAt(0).toUpperCase() + textCiel.substring(1).toLowerCase();
            //attaché le détail du ciel à la div
            div1.appendChild(p1);

            //créer la h5 qui va contenir la tempréature actuelle
            var p2 = document.createElement("h5");
            p2.className = " card-subtitle text-center";
            p2.innerHTML = Math.round(dataCurrent.main.feels_like) + "°";
            //Attaché la température à la div
            div1.appendChild(p2);
            
            //créer le vent, l'humidité, lever et coucher de soleil
            orientationVent(dataCurrent['wind']['deg']);
            var p3 = document.createElement("p");
            p3.className ="card-text";
            p3.innerHTML = "Vent : " + Math.round(dataCurrent.wind.speed * 3.6) + "Km/h" + " " + hh + "<br> Humidité : " + Math.round(dataCurrent.main.humidity) + "% <br>" + "Lever de soleil : " + new Date(dataCurrent.sys.sunrise * 1000).toLocaleTimeString() + "<br> Coucher de soleil : " + new Date(dataCurrent.sys.sunset * 1000).toLocaleTimeString();
            //attaché les détails à la div
            div1.appendChild(p3);
        }})
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