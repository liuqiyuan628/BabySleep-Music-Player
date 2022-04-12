//Get numbers only from a string if the string include numbers.
//For example, if the timer button shows "1Min", this function will omit all characters except the number "1"
//@param timeIn: The content shown on the timer button.

function getTimerTime(timeIn) {
  if (timeIn) {
    let onlyNum = timeIn.replace(/[^0-9]/g, "");

    if (timeIn && onlyNum != "" && onlyNum != null && onlyNum != 0) {
      return onlyNum;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
