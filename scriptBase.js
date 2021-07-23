// Localiser ma position
//import { localiseMaPosition } from "./scriptLocalisation.js";
//import { getWeatherNow } from "./scriptGetWeather.js";
import { errorText, verifierVille, StyleInputVille, supprimeResult } from "./scriptLocalisation.js";
import { getWeatherNow } from "./scriptGetWeatherNow.js";
import { getWeatherHourly } from "./scriptGetWeatherHourly.js";
import { getWeatherDaily } from "./scriptGetWeatherDaily.js";
import { chercherVille } from "./scriptChercherVille.js";

var btnLocalisation = document.getElementById("localisation");
var errorMessage = document.getElementById("errorMsg");
var btnChercherUneVille = document.getElementById("chercherVille");
var villeName = document.querySelector("#villeName");

btnLocalisation.addEventListener("click", localiseMaPosition);

function localiseMaPosition() {
    StyleInputVille();
    if (villeName.value) {
        villeName.value = ""
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, errorLocal);
        //Fonction de localisation
        function showPosition(x) {
            var a = x.coords.latitude;
            var b = x.coords.longitude;
            var c = x.coords.altitude;
            console.log(a + " " + b + " " + c);
            supprimeResult();
            getWeatherNow(a, b);
            getWeatherHourly(a, b);
            getWeatherDaily(a, b);
        }
    };
    //Message d'erreur Impossible de localiser
    function errorLocal() {
        errorMessage.className = errorText.errorLocalisation.msgClassName;
        errorMessage.innerHTML = errorText.errorLocalisation.msg;
    }
};


//Fonction de chercher une ville
btnChercherUneVille.addEventListener("click", trouverVille);
function trouverVille() {
    verifierVille();
    supprimeResult();
    chercherVille(villeName.value);
}

//Fonction de click sur la touche Ok pour lancher la recherche
    document.addEventListener('keypress', codeClick)
    function codeClick(e){
        if (e.charCode == 13) {
            trouverVille();
        }
    }


//ajouter 'form-control is-invalid' dans le cas ou le nom de la ville n'existe pas ou vide
