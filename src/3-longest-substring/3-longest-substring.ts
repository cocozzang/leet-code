function lengthOfLongestSubstring(s: string): number {
  const subStrBuf: string[] = [];
  let longest = 0;

  for (const char of s) {
    const index = subStrBuf.indexOf(char);

    if (index !== -1) {
      subStrBuf.splice(0, index + 1);
    }

    subStrBuf.push(char);

    longest = Math.max(longest, subStrBuf.length);
  }

  return longest;
}

lengthOfLongestSubstring("abcabcabc");

export { lengthOfLongestSubstring };
