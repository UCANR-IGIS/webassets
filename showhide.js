
function showHide(shID) {
  if (shID=="soln-show-all") {
    var allAnswerCode = document.getElementsByClassName("answer-code");
    for (i = 0; i < allAnswerCode.length; i++) {
        allAnswerCode[i].style.display = 'block';
    }
  } else if (shID=="soln-hide-all") {
    var allAnswerCode = document.getElementsByClassName("answer-code");
    for (i = 0; i < allAnswerCode.length; i++) {
        allAnswerCode[i].style.display = 'none';
    }
  } else {
    if (document.getElementById(shID)) {
      if (document.getElementById(shID).style.display != 'block') {
        document.getElementById(shID).style.display = 'block';
      } else {
        document.getElementById(shID).style.display = 'none';
      }
    }
  }
}
