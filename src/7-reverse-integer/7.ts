export const reverse = (x: number): number => {
  if (x === 0) return x;

  let isNegative: boolean = x < 0 ? true : false;

  let reversedNum = Number(Math.abs(x).toString().split("").reverse().join(""));

  if (isNegative) reversedNum = -reversedNum;

  if (reversedNum > Math.pow(2, 31) - 1 || reversedNum < Math.pow(-2, 31))
    return 0;

  return reversedNum;
};
