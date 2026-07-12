const music = document.getElementById("background-music");
const button = document.getElementById("music-button");

music.volume = 0.04;

document.addEventListener("click", function startMusic() {
    music.play();
    document.removeEventListener("click", startMusic);
});

button.onclick = function(event) {
    event.stopPropagation();

    if (music.paused) {
        music.play();
        button.innerHTML = "❚❚";
    } else {
        music.pause();
        button.innerHTML = "♫";
    }
};