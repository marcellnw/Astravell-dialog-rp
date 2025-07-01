document.getElementById("startButton").addEventListener("click", openStory);

function openStory() {
  const music = document.getElementById("bgMusic");
  const story = document.getElementById("storyPage");

  story.classList.add("active");
  music.volume = 0;
  music.play();

  let volume = 0;
  const fadeInterval = setInterval(() => {
    if (volume < 1) {
      volume += 0.02;
      music.volume = Math.min(volume, 1);
    } else {
      clearInterval(fadeInterval);
    }
  }, 100);
}

function closeStory() {
  const music = document.getElementById("bgMusic");
  const story = document.getElementById("storyPage");

  let volume = music.volume;
  const fadeOut = setInterval(() => {
    if (volume > 0) {
      volume -= 0.02;
      music.volume = Math.max(volume, 0);
    } else {
      clearInterval(fadeOut);
      music.pause();
      music.currentTime = 0;
      story.classList.remove("active");
    }
  }, 100);
}