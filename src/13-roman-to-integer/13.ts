export const romanToInt = (s: string): number => {
  const str = s.split("");
  let total = 0;

  const one_char_map: any = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const two_char_map: any = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  for (let i = 0; i < str.length; i++) {
    // two character case
    if (two_char_map[str[i] + str[i + 1]]) {
      total += two_char_map[str[i] + str[i + 1]];
      i++;
      continue;
    }

    total += one_char_map[str[i]];
  }
  return total;
};
