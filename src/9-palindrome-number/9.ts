export const isPalindrome = (x: number): boolean => {
  if (x < 0) return false;

  let palindrome: string[];
  let num_buf = x.toString().split("");

  if (num_buf.length === 1) return true;

  palindrome = [...num_buf].reverse();

  return palindrome.join("") === num_buf.join("");
};
