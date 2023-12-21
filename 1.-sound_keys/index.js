window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop de ejecution
  audio.currentTime = 0; //rewind to start
  audio.play();
  console.log(key);
});
