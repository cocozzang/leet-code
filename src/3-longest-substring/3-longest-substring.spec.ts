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

describe("3번 문제", () => {
  test("case1", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });

  test("case2", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });

  test("case3", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });
});
