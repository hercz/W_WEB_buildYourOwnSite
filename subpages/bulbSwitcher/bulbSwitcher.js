/**
 * Created by herczkumihalybalazs on 2016.05.27..
 */
function switchbulb() {
    var bulbImage = document.getElementById("bulbpic");
    var bulbstatus = document.getElementById("bulbStatus");
    if (bulbImage.src.match("bulbOff")) {
        bulbImage.src = "subpages/bulbSwitcher/bulbOn.jpg";
        document.getElementById("bulbStatus").textContent = "Off";
    }
    else {
        bulbImage.src = "subpages/bulbSwitcher/bulbOff.jpeg";
        document.getElementById("bulbStatus").textContent = "On";

    }
    
}
