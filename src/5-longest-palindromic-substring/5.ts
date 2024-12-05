export const longestPalindrome = (s: string): string => {
  if (s.length <= 1) return s;

  let maxLen = 1;
  let maxStr = s.substring(0, 1);

  for (let i = 0; i < s.length; i++) {
    for (let j = i + maxLen; j <= s.length; j++) {
      if (j - i > maxLen && isPalindrome(s.substring(i, j))) {
        maxLen = j - i;
        maxStr = s.substring(i, j);
      }
    }
  }

  return maxStr;
};

const isPalindrome = (str: string): boolean => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
