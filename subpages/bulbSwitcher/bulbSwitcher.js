/**
 * Created by herczkumihalybalazs on 2016.05.27..
 */
window.onload = function () {
    document.getElementById("bulbpic").addEventListener("click", switchbulb);
}


function switchbulb() {
    var bulbImage = document.getElementById("bulbpic");
    var bulbstatus = document.getElementById("bulbStatus");
    if (bulbImage.src.match("bulbOff")) {
        bulbImage.src = "subpages/bulbSwitcher/bulbOn.jpg";
        bulbstatus.textContent = "Off";
    }
    else {
        bulbImage.src = "subpages/bulbSwitcher/bulbOff.jpeg";
        bulbstatus.textContent = "On";
    }
}
