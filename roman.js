function roman(digi) {
  var answer = "";
  if (digi >= 5 ) {
    answer = answer + "V";
    digi = digi - 5;
  };
  if (digi == 1) {
    answer = answer + "I";
    return answer;
  } else if (digi ==2) {
    answer = answer + "II"
    return answer;
  } else if (digi == 3) {
    answer = answer + "III"
    return answer;
  } else if (digi == 4) {
    return "IV";
  } else {
    return answer;
  }
}
