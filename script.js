document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loading").style.display = "none";
        document.getElementById("fond").style.display = "block";
    }, 3000); // Affiche l'animation de chargement pendant au moins 3 secondes
});