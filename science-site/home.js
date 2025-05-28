

function w3_open() {

    document.getElementById("sidebar").style.width = "25%";
    document.getElementById("sidebar").style.display = "";
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("header").style.marginLeft = "26.5%";
    document.getElementById("header").style.width = "71.9%";
    document.getElementById("openNav").style.display = "none";


}

function w3_close() {
    document.getElementById("sidebar").style.width = "0%";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("header").style.marginLeft = "0";
    document.getElementById("header").style.width = "98.35%";
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}