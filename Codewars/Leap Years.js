function isLeapYear(year) {
  if (year % 400 == 0) {
    return true;
  } else if (year % 100 == 0) {
    return false;
  } else if (year % 4 == 0) {
    return true;
  } else return false;
}

// https://www.codewars.com/kata/526c7363236867513f0005ca/train/javascript
