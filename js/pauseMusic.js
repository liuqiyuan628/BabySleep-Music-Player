//this function is designed to pause a playing music
//@param musicPlayBtn: get all the music play button

function pauseMusic(musicPlayBtn) {
  for (let i = 0; i < musicPlayBtn.length; i++) {
    if (musicPlayBtn[i].duration > 0 && !musicPlayBtn[i].paused) {
      musicPlayBtn[i].pause();
      musicPlayBtn[i].currentTime = 0;
    }
  }
}
