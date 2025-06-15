document.body.addEventListener("keyup", (event) => {
  play(event.code.toLowerCase());
});
document.querySelector(".composer button").addEventListener("click", () => {
  playComposer();
});

function play(sound) {
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);
  let audioElement = document.querySelector(`#s_${sound}`);

  if (audioElement) {
    playAudio(audioElement);
    keystyle(keyElement);
  }
}

function playAudio(e) {
  e.currentTime = 0;
  e.play();
}

function keystyle(e) {
  e.classList.add("active");
  setTimeout(() => {
    e.classList.remove("active");
  }, 300);
}

function playComposer() {
  let song = document.querySelector("#input").value;
  if (song !== " ") {
    let musica = song.split("");
    wait = 0;
    for (let i of musica) {
      setTimeout(() => {
        play(`key${i}`);
      }, wait);
      wait += 250;
    }
  }
}
