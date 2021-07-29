import { afficheJour } from "./scriptLocalisation.js";

var key = "dd926d971013aa0a900f7351eb7b0d58";

export function getWeatherDaily(a, b) {
    var apiDaily = "https://api.openweathermap.org/data/2.5/onecall?lat=" + a + "&lon=" + b + "&exclude=alerts&appid=" + key + "&lang=fr&units=metric";
    fetch(apiDaily)
        .then(function (response) {
            var dataDaily = response.json();
            return dataDaily;
        })
        .then(function (dataDaily) {

            if (!document.getElementById("dailyPrevision")) {

                for (let index = 0; index < 5; index++) {
                    //créer la div principal
                    //var div0 = document.createElement("div");
                    //div0.className = "meteoPrev";

                    //Créer Li contenant la prévision journalière
                    var li1 = document.createElement("li");
                    li1.className = "list-group-item meteoPrev";
                    li1.id = "dailyPrevision";
                    //créer la div1 de la ligne
                    var div1 = document.createElement("div");
                    div1.className = "row";
                    //créer la div2 qui contient la date
                    var div2 = document.createElement("div");
                    div2.className = "col-4 align-self-center text-center";
                    //créer la date de la prévision
                    var p1 = document.createElement("p");
                    var t = afficheJour(new Date(dataDaily["daily"][index + 1]["dt"] * 1000).getDay());
                    p1.innerHTML = t + "<br>" +  new Date(dataDaily["daily"][index + 1]["dt"] * 1000).toLocaleDateString();
                    //créer la div qui contient l'état du ciel et la température min max
                    var div3 = document.createElement("div");
                    div3.className = "col-5 align-self-center text-center";
                    //créer l'état du ciel
                    var p2 = document.createElement("h5");
                    p2.textContent = dataDaily["daily"][index + 1]['weather'][0]['description'].charAt(0).toUpperCase() + dataDaily["daily"][index + 1]['weather'][0]['description'].substring(1).toLowerCase();
                    //créer la température min et max
                    var p3 = document.createElement("p");
                    var tempeMin = Math.round(dataDaily.daily[index + 1].temp.min) + "°";
                    var tempeMax = Math.round(dataDaily["daily"][index + 1]["temp"]["max"]) + "°";
                    p3.innerHTML = "Min : " + tempeMin + "<br>" + "Max : " + tempeMax;
                    //créer la div qui contient l'icone de la météo
                    var div4 = document.createElement("div");
                    div4.className = "col-3 align-self-center";
                    var img1 = document.createElement("img");
                    img1.className = "img-fluid";
                    img1.src = "http://openweathermap.org/img/wn/" + dataDaily["daily"][index + 1]["weather"][0]["icon"] + "@2x.png";

                    li1.appendChild(div1);
                    div1.appendChild(div2);
                    div1.appendChild(div3);
                    div1.appendChild(div4);
                    div2.appendChild(p1);
                    div3.appendChild(p2);
                    div3.appendChild(p3);
                    div4.appendChild(img1);
                    document.getElementById("affichageDaily").appendChild(li1);
                }
            }
        })
}