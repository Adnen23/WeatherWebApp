//Les messages d'erreur concernant la localisation et le nom des villes
export var errorText = {
    errorLocalisation: {
        msg: "<strong>Localisation Impossible !</strong> Veuillez autoriser la localisation de votre appareil",
        msgClassName: "alert alert-danger",
    },
    errorChampVille: {
        msg: "<strong>Champ de ville vide !</strong> Veuillez saisir une ville",
        msgClassName: "alert alert-danger",
    },
    noErrorMsg: {
        msg: "",
        msgClassName: "",
    },
    errorVilleIntrouvable: {
        msg: "<strong>Ville n'existe pas !</strong> Veuillez saisir à nouveau le nom de la ville",
        msgClassName: "alert alert-danger",
    }
};



//Chercher une ville


var villeInput = document.getElementById("villeName");
var btnChercherUneVille = document.getElementById("chercherVille");

//Activer le style blanc de l'input nom de ville une fois qu'un texte est écrit

//Validation du nom de la ville dans l'input
btnChercherUneVille.addEventListener("click", verifierVille);
export function verifierVille() {
    var errorMessage = document.getElementById("errorMsg");
    if (villeInput.value == "") {
        errorMessage.className = errorText.errorChampVille.msgClassName;
        errorMessage.innerHTML = errorText.errorChampVille.msg;
        villeInput.style.backgroundColor = "red";
        setTimeout(function () { villeInput.style.backgroundColor = "white" }, 3000);
        alert("Veuillez saisir le nom de la ville");

    }
    villeInput.addEventListener("keydown", StyleInputVille)

    //Fonction qui rend l'input du nom de la ville blanc
    function StyleInputVille() {
        errorMessage.className = errorText.noErrorMsg.msgClassName;
        errorMessage.innerHTML = errorText.noErrorMsg.msg;
    }
};

