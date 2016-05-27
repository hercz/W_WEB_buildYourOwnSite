/**
 * Created by herczkumihalybalazs on 2016.05.27..
 */
var player;

window.onload = function () {
    document.getElementById("btnPlay").addEventListener("click", play, false);
    document.getElementById("btnPause").addEventListener("click", pause, false);
    document.getElementById("btnStop").addEventListener("click", stop, false);
    document.getElementById("btnVolumeUp").addEventListener("click", volumeUp, false);
    document.getElementById("btnVolumeDown").addEventListener("click", volumeDown, false);

    player = document.getElementById("player");
};

function play() {
    player.play();
}

function pause() {
    player.pause();
}

function stop() {
    player.pause();
    player.currentTime = 0;
}

function volumeUp() {
    if (player.volume >= 0 && player.volume < 1) {
        player.volume += 0.1;
    }
    else {
        player.volume = 1;
    }
}

function volumeDown() {
    if (player.volume > 0 && player.volume <= 1) {
        player.volume -= 0.1;
    }
    else {
        player.volume = 0;
    }
}
