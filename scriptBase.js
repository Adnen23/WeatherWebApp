// Localiser ma position
//import { localiseMaPosition } from "./scriptLocalisation.js";
//import { getWeatherNow } from "./scriptGetWeather.js";
import { errorText, verifierVille } from "./scriptLocalisation.js";
import { getWeatherNow, getweatherId } from "./scriptGetWeatherNow.js";

var btnLocalisation = document.getElementById("localisation");
var errorMessage = document.getElementById("errorMsg");
var btnChercherUneVille = document.getElementById("chercherVille");


btnLocalisation.addEventListener("click", localiseMaPosition);

function localiseMaPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, errorLocal);
        //Fonction de localisation
        function showPosition(x) {
            var a = x.coords.latitude;
            var b = x.coords.longitude;
            var c = x.coords.altitude;
            console.log(a + " " + b + " " + c) ;
            getWeatherNow(a, b);
            getweatherId();
        };
        //Message d'erreur Impossible de localiser
        function errorLocal() {
            errorMessage.className = errorText.errorLocalisation.msgClassName;
            errorMessage.innerHTML = errorText.errorLocalisation.msg;
        }
    };
};

//Fonction de chercher une ville
btnChercherUneVille.addEventListener("click", verifierVille);


