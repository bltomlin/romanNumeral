function convert() {
  let value = document.getElementById("number").value;
  if (value === '') {
    document.getElementById('output').innerHTML = "Please enter a valid number"
  } else if (value <= 0) {
    document.getElementById('output').innerHTML = "Please enter a number greater than or equal to 1"
  } else if (value >= 4000) {
    document.getElementById('output').innerHTML = "Please enter a number less than or equal to 3999"
  } else {
    let str = numCon(value)
    document.getElementById('output').innerHTML = str;
  }
}

function numCon(num) {
  let str = ""
  while (num > 0) {
    if (num >= 1000) {
      str = str.concat("M")
      num -= 1000;
    } else if (num >= 900 && num < 1000) {
      str = str.concat("CM");
      num -= 900;
    } else if (num >= 500 && num < 900) {
      str = str.concat("D");
      num -= 500;
    } else if (num >= 400 && num < 500) {
      str = str.concat("CD");
      num -= 400;
    } else if (num >= 100 && num < 400) {
      str = str.concat("C");
      num -= 100;
    } else if (num >= 90 && num < 100) {
      str = str.concat("XC");
      num -= 90;
    } else if (num >= 50 && num < 90) {
      str = str.concat("L");
      num -= 50;
    } else if (num >= 40 && num < 50) {
      str = str.concat("XL");
      num -= 40;
    } else if (num >= 10 && num < 40) {
      str = str.concat("X");
      num -= 10;
    } else if (num >= 9 && num < 10) {
      str = str.concat("IX");
      num -= 9;
    } else if (num >= 5 && num < 9) {
      str = str.concat("V");
      num -= 5;
    } else if (num >= 4 && num < 5) {
      str = str.concat("IV");
      num -= 4;
    } else {
      str = str.concat("I");
      num -= 1;
    }
  }
  return str
}
