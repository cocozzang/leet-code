import { longestPalindrome } from "./5";

describe("5번 문제 test", () => {
  it("case test", () => {
    const inputs = ["babad", "cbbd", "abbidjoddidd"];
    const answer = ["bab", "bb", "ddidd"];
    const outputs: string[] = [];

    inputs.map((input) => {
      outputs.push(longestPalindrome(input));
    });

    expect(outputs).toEqual(answer);
  });
});
