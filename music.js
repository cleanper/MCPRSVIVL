function playMusic() {
    const music = document.getElementById('background-music');
    music.play();
}

window.onload = () => {
    playMusic();
};

window.onbeforeunload = () => {
    const music = document.getElementById('background-music');
    music.pause();
};