export const longestCommonPrefix = (strs: string[]): string => {
  let res = "";
  let minlen = 200;

  for (let i = 0; i < strs.length; i++) {
    minlen = Math.min(minlen, strs[i].length);
  }

  for (let i = 0; i < minlen; i++) {
    let buf = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (buf !== strs[j][i]) {
        return res;
      }
    }

    res += buf;
  }

  return res;
};
