document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLowerCase());
});

function playSound(sound) {
  let keyElement = document.querySelector(`#${sound}`);
  console.log(sound);
}
