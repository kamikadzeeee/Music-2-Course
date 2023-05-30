var tracks = [
	{src: "/static/audio/Medeo-Seniorita.mpeg", title: "Трек 1"},
	{src: "/static/audio/Medeo-otyzdan_asyp_baramyn.mpeg", title: "Трек 2"},
	{src: "/static/audio/Medeo-Orik.mpeg", title: "Трек 3"},
	{src: "/static/audio/Medeo-Jurek.mpeg", title: "Трек 4"},
	{src: "/static/audio/Medeo-Drift.mpeg", title: "Трек 5"},
	{src: "/static/audio/Medeo-Bata.mpeg", title: "Трек 6"},
	{src: "/static/audio/Medeo-Bari_Biledi.mpeg", title: "Трек 7"},
	{src: "/static/audio/Medeo-Lya.mpeg", title: "Трек 8"}
];
var audio = document.getElementById("audio");
var playpause = document.getElementById("playpause");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var currentTrack = 0;

const audioPlayer = document.getElementById("audio");
const coverImage = document.getElementById("cover-image");

function playPause() {
	if (audio.paused) {
		audio.play();
		playpause.innerHTML = "&#10074;&#10074;";
	} else {
		audio.pause();
		playpause.innerHTML = "&#9658;";
	}
}

function nextTrack() {
	currentTrack++;
	if (currentTrack >= tracks.length) {
		currentTrack = 0;
	}
	audio.src = tracks[currentTrack].src;
	audio.title = tracks[currentTrack].title;
	audio.play();
	playpause.innerHTML = "&#10074;&#10074;";
}

function prevTrack() {
	currentTrack--;
	if (currentTrack < 0) {
		currentTrack = tracks.length - 1;
	}
	audio.src = tracks[currentTrack].src;
	audio.title = tracks[currentTrack].title;
	audio.play();
	playpause.innerHTML = "&#10074;&#10074;";
}

audio.addEventListener("ended", function() {
	nextTrack();
});

audio.src = tracks[currentTrack].src;
audio.title = tracks[currentTrack].title;


audioPlayer.addEventListener("play", function() {
  const currentSong = audioPlayer.src.split('/').pop();
  const coverPath = "/static/audio/" + currentSong.replace(".mpeg", ".png");
  coverImage.src = coverPath;
  const songTitle = document.getElementById("song-title");
  songTitle.innerHTML = currentSong.replace(".mpeg", "");
});


