window.onload = function () {
  var allMusic = document.getElementsByTagName("audio");
  var timer = document.getElementById("timer-select");
  var hiddenInfo = document.querySelector(".hiddenInfo");

  timer.addEventListener("change", () => {
    let selectedTimer = timer.options[timer.selectedIndex]; // get selected timer
    let checkTimeResult = checkTimerTime(selectedTimer.text); // check if the timer is valid
    // console.log("checkTime function >>>> " + checkTimeResult);

    let resultNumOnly = getTimerTime(checkTimeResult);
    // console.log("only Number function >>>> " + resultNumOnly);

    if (checkTimeResult === "3s Timer") {
      hiddenInfo.classList.toggle("show");
      setTimeout(() => {
        //change back to the default style when the timer is end
        pauseMusic(allMusic); // pause music
        timer.options[0].selected = "true";
        hiddenInfo.classList.remove("show");
      }, 1000 * 60 * 0.05);
    } else if (resultNumOnly == false) {
      alert("Not a Valid Timer!");
      timer.options[0].selected = "true";
    } else if (checkTimeResult) {
      hiddenInfo.classList.toggle("show");
      setTimeout(() => {
        pauseMusic(allMusic); // pause music
        //change back to the default style and option when the timer is end
        timer.options[0].selected = "true";
        hiddenInfo.classList.remove("show");
      }, 1000 * 60 * resultNumOnly);
    }
  });
};
