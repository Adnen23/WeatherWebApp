

var key = "dd926d971013aa0a900f7351eb7b0d58";

export function getWeatherHourly(a, b) {
    var apiPrevious = "https://api.openweathermap.org/data/2.5/onecall?lat=" + a + "&lon=" + b + "&exclude=alerts&appid=" + key + "&lang=fr&units=metric";
    console.log(apiPrevious);
    fetch(apiPrevious)
        .then(function (response) {
            var dataPrevious = response.json();
            return dataPrevious;
        })
        .then(function (dataPrevious) {
            
            if (!document.getElementById("hourlyPrevision")) {
                
                for (let index = 0; index < 8; index++) {
            
            //créer li contenant la ligne complete
            var li1 = document.createElement("li");
            li1.className = "list-group-item";
            li1.id ="hourlyPrevision";

            //créer la div1 de la ligne
            var div1 = document.createElement("div");
            div1.className = "row";

            //créer la div2 qui contient l'heure
            var div2 = document.createElement("div");
            div2.className = "col-2 align-self-center";
            //créer l'heur de la prévision
            var p1 = document.createElement("p");
            p1.className = "hourlyTime";
            p1.textContent = new Date(dataPrevious["hourly"][index + 1]["dt"] * 1000).getHours() + "h"; //index + 1
            //créer la div3 qui contient la température et l'état du ciel
            var div3 = document.createElement("div");
            div3.className = "col-6 align-self-center text-center";
            var p2 = document.createElement("h5");
            p2.textContent = Math.round(dataPrevious["hourly"][index + 1]["temp"]) + "°";  //index + 1
            
            var p3 = document.createElement("p");
            var textCielHourly = dataPrevious["hourly"][index + 1]['weather'][0]['description'];
            p3.textContent = textCielHourly.charAt(0).toUpperCase() + textCielHourly.substring(1).toLowerCase();
            
            var div4 = document.createElement("div");
            div4.className = "col-4 align-self-center";
            var img1 = document.createElement("img");
            img1.className = "img-fluid";
            img1.src = "http://openweathermap.org/img/wn/" + dataPrevious["hourly"][6]["weather"][0]["icon"] + "@2x.png";

            li1.appendChild(div1);
            div1.appendChild(div2);
            div1.appendChild(div3);
            div1.appendChild(div4);
            div2.appendChild(p1);
            div3.appendChild(p2);
            div3.appendChild(p3);
            div4.appendChild(img1);
            document.getElementById("tt").appendChild(li1);
            console.log(li1);
             
            //document.getElementById("cardHourly").className="card h-25 overflow-scroll ";
        
        }
        }   })
}