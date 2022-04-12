//Check if a timer set button exists.
//If exists,it will return a string value to indicate which timer is called.
//@param timeIn: The content shown on the timer button.

function checkTimerTime(timeIn) {
  if (timeIn === "3s") {
    return "3s Timer";
  } else if (timeIn === "1Min") {
    return "1 minute timer";
  } else if (timeIn === "10Min") {
    return "10 minutes timer";
  } else if (timeIn === "15Min") {
    return "15 minutes timer";
  } else if (timeIn === "30Min") {
    return "30 minutes timer";
  } else if (timeIn === "1Hour") {
    return "60 minutes timer";
  } else if (timeIn === "1000Hours") {
    return false;
  } else {
    return "Error! No such a timer";
  }
}
