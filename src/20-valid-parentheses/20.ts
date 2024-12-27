export const isValid = (s: string): boolean => {
  if (s.length % 2 === 1) {
    return false;
  }

  const brackets: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}",
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const closeBrakets = [")", "]", "}"];

  const stack: string[] = [];

  for (let char of s) {
    if (stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      if (closeBrakets.includes(char) && !stack.includes(char)) {
        return false;
      }
      stack.push(brackets[char]);
    }
  }

  const res = stack.length === 0 ? true : false;

  return res;
};
