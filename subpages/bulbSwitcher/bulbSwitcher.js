/**
 * Created by herczkumihalybalazs on 2016.05.27..
 */
function switchbulb() {
    var bulbImage = document.getElementById("bulbpic")
    if (bulbImage.src.match("bulbOff")) {
        bulbImage.src = "subpages/bulbSwitcher/bulbOn.jpg"
    }
    else {
        bulbImage.src = "subpages/bulbSwitcher/bulbOff.jpeg"
    }
    
}
