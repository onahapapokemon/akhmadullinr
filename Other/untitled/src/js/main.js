function playPause(btn,vid) {
    var vid = document.getElementById(vid);
    if (vid.paused ) {
        vid.play();
        btn.innerHTML = 'Pause';
    }
    else {
        vid.pause();
        btn.innerHTML = 'Play';
    }
}

var video_player = document.getElementById("video_player"),
    links = video_player.getElementsByTagName('a');
var video_block = document.getElementById("video_title");
var video_view = document.getElementById("video_view");



for (var i=0; i<links.length; i++) {
    links[i].onclick = handler;
}
function handler(e) {
    e.preventDefault();
    videotarget = this.getAttribute("href");
    filename = videotarget.substr(0, videotarget.lastIndexOf('.')) || videotarget;
    video = document.querySelector("#video_player video");
    video.removeAttribute("controls");
    video.removeAttribute("poster");
    video_block.innerHTML = this.querySelector(".video_name").textContent;
    source = document.querySelectorAll("#video_player video source");
    source[0].src = filename + ".mp4";
    source[1].src = filename + ".webm";
    video_view.innerHTML = this.querySelector(".video_views").textContent;
    video.load();
    video.play();
}

