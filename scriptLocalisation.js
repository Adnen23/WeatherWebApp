//Les messages d'erreur concernant la localisation et le nom des villes
export var errorText = {
    errorLocalisation: {
        msg: "<strong>Localisation Impossible !</strong> Veuillez autoriser la localisation de votre appareil",
        msgClassName: "alert alert-danger",
    },
    errorChampVille: {
        msg: "<strong>Champ de ville vide !</strong> Veuillez saisir une ville",
        msgClassName: "alert alert-danger",
        formType: "form-control is-invalid",
    },
    noErrorMsg: {
        msg: "",
        msgClassName: "",
        formType: "form-control",

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
var errorMessage = document.getElementById("errorMsg");
export function verifierVille() {
    if (villeInput.value == "") {
        errorMessage.className = errorText.errorChampVille.msgClassName;
        errorMessage.innerHTML = errorText.errorChampVille.msg;
        villeInput.className = errorText.errorChampVille.formType;

        //villeInput.style.backgroundColor = "red";
        setTimeout(function () { villeInput.style.backgroundColor = "white" }, 3000);
        alert("Veuillez saisir le nom de la ville");

    }
    villeInput.addEventListener("keydown", StyleInputVille)

};

//Fonction qui rend l'input du nom de la ville blanc
export function StyleInputVille() {
    errorMessage.className = errorText.noErrorMsg.msgClassName;
    errorMessage.innerHTML = errorText.noErrorMsg.msg;
    villeInput.className = errorText.noErrorMsg.formType;
};

//fonction qui supprime le résultat précédent pour pouvoir afficher la nouvelle recherche
export function supprimeResult() {
    if (document.querySelector(".meteoPrev")) {
        var meteoPrev = document.querySelectorAll(".meteoPrev");
        for (let index = 0; index < meteoPrev.length; index++) {
            meteoPrev[index].remove();
        }
    }
    }

//fonction qui affiche le jour de la prévision
export function afficheJour(x) {
    switch (x) {
        case 0:
            return "Dimanche";
            break;
        case 1:
            return "Lundi";
            break;
        case 2:
            return "Mardi";
            break;
        case 3:
            return "Mercredi";
            break;
        case 4:
            return "Jeudi";
            break;
        case 5:
            return "Vendredi";
            break;
        case 6:
            return "Samedi";
    }
}