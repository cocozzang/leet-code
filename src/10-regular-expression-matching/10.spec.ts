import { isMatch } from "./10";

describe("Q10", () => {
  it("case test", () => {
    const inputs = [
      { s: "aa", p: "a" },
      { s: "aaaa", p: "a*" },
      { s: "ab", p: ".*" },
      { s: "aab", p: "c*a*b" },
      { s: "aab", p: ".*b*" },
      { s: "mississippi", p: "mis*is*p*." },
    ];
    const outputs: boolean[] = [];
    const expected = [false, true, true, true, true, false];

    inputs.forEach((ele) => {
      outputs.push(isMatch(ele.s, ele.p));
    });

    expect(outputs).toEqual(expected);
  });
});
