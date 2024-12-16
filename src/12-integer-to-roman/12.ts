export const intToRoman = (num: number): string => {
  const answer = [];

  let numBuf = num;

  while (numBuf >= 1) {
    if (numBuf >= 1000) {
      numBuf -= 1000;
      answer.push("M");
      continue;
    }

    if (numBuf >= 500) {
      if (numBuf >= 900) {
        numBuf -= 900;
        answer.push("CM");
        continue;
      } else {
        numBuf -= 500;
        answer.push("D");
        continue;
      }
    }

    if (numBuf >= 100) {
      if (numBuf >= 400) {
        numBuf -= 400;
        answer.push("CD");
        continue;
      } else {
        numBuf -= 100;
        answer.push("C");
        continue;
      }
    }

    if (numBuf >= 50) {
      if (numBuf >= 90) {
        numBuf -= 90;
        answer.push("XC");
        continue;
      } else {
        numBuf -= 50;
        answer.push("L");
        continue;
      }
    }

    if (numBuf >= 10) {
      if (numBuf >= 40) {
        numBuf -= 40;
        answer.push("XL");
        continue;
      } else {
        numBuf -= 10;
        answer.push("X");
        continue;
      }
    }

    if (numBuf >= 5) {
      if (numBuf === 9) {
        numBuf -= 9;
        answer.push("IX");
        continue;
      } else {
        numBuf -= 5;
        answer.push("V");
        continue;
      }
    }

    if (numBuf >= 1) {
      if (numBuf === 4) {
        numBuf -= 4;
        answer.push("IV");
        continue;
      } else {
        numBuf -= 1;
        answer.push("I");
        continue;
      }
    }
  }

  return answer.join("");
};
