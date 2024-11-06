import { lengthOfLongestSubstring } from "./3-longest-substring";

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
