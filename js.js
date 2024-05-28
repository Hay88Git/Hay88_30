function ShowNav() {
    document.getElementById("nav").style.width = "80%";
    document.getElementById("close").style.display = "block";
}
function HideNav() {
    document.getElementById("nav").style.width = "0%";
    document.getElementById("close").style.display = "none";
}

var newAdr = "./img/1.png";
var imgAdr = document.querySelectorAll(".adr img");
imgAdr.forEach(function(img) {
    img.src = newAdr;
});