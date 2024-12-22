export const letterCombinations = (digits: string): string[] => {
  const num_letter_map = [
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];

  if (digits.length === 0) return [];

  const res: string[] = [];

  const letter_printer = (letter: string, next_num: string) => {
    if (next_num.length === 0) {
      res.push(letter);
    } else {
      const characters: string = num_letter_map[Number(next_num[0]) - 2];
      for (const character of characters) {
        letter_printer(letter + character, next_num.slice(1));
      }
    }
  };

  letter_printer("", digits);

  return res;
};
