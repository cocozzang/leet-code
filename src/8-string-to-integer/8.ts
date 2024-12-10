export const myAtoi = (s: string): number => {
  let arr = [];
  let isStart = false;
  let isPositive = true;

  for (let char of s) {
    // 문자열이 가장 먼저 나온 case
    if (
      !isStart &&
      char !== "0" &&
      !Number(char) &&
      char !== " " &&
      char !== "-" &&
      char !== "+"
    ) {
      return 0;
    }

    // 숫자인식이후에 숫자이외에 것들이 오면 반복문종료
    if (Number(char) !== 0 && !Number(char) && isStart) {
      break;
    }

    if (char === " " && isStart) {
      break;
    }

    // 숫자인식 이전의 + - 처리
    if (!isStart && (char === "-" || char === "+")) {
      isStart = true;

      if (char === "+") {
        isPositive = true;
      } else {
        isPositive = false;
      }
    }

    // 숫자일떄
    if (char !== " " && (Number(char) === 0 || Number(char))) {
      isStart = true;
      arr.push(char);
    }
  }

  let answer = isPositive ? +Number(arr.join("")) : -Number(arr.join(""));

  if (Math.pow(2, 31) - 1 < answer) {
    answer = Math.pow(2, 31) - 1;
  }

  if (Math.pow(-2, 31) > answer) {
    answer = Math.pow(-2, 31);
  }

  return answer;
};
