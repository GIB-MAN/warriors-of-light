const player = document.getElementById("player");
const playBtn = document.getElementById("playBtn");
const playIcon = document.getElementById("play_Icon");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const playTime = document.querySelector(".play-time span");
const fullTime = document.querySelector(".full-time span");

// play / pause
player.addEventListener("play", () => {
    playIcon.src = "assets/images/desktop/footer/play-control/pause.png";
});

player.addEventListener("pause", () => {
    playIcon.src = "assets/images/desktop/footer/play-control/play.png";
});
playBtn.addEventListener("click", () => {

    if(player.paused){
        player.play();
    }else{
        player.pause();
    }

});

// უკან 10 წამით
backBtn.addEventListener("click", () => {
    player.currentTime -= 10;
});

// წინ 10 წამით
forwardBtn.addEventListener("click", () => {
    player.currentTime += 10;
});



player.addEventListener("loadedmetadata", () => {
    fullTime.textContent = formatTime(player.duration);
});

player.addEventListener("timeupdate", () => {
    playTime.textContent = formatTime(player.currentTime);
});

function formatTime(time){
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0"+seconds : seconds}`;
}

const progress = document.getElementById("progress");
console.log(player.duration);

player.addEventListener("timeupdate", () => {

    const progressPercent = (player.currentTime / player.duration) * 100;

    progress.style.width = progressPercent + "%";
});



const progressContainer = document.getElementById("progressContainer");

progressContainer.addEventListener("click", (e) => {

    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;

    const duration = player.duration;

    player.currentTime = (clickX / width) * duration;

});



player.addEventListener("loadedmetadata", () => {

    const duration = player.duration;

    fullTime.textContent = formatTime(duration);

});

function formatTime(time){

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

}

