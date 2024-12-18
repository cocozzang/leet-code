import { longestCommonPrefix } from "./14";

describe("Q14", () => {
  it("case test", () => {
    const inputs = [
      ["flower", "flow", "flight"],
      ["dog", "racecar", "car"],
    ];
    const outputs: string[] = [];
    const expected = ["fl", ""];

    inputs.forEach((v) => {
      outputs.push(longestCommonPrefix(v));
    });

    expect(expected).toEqual(outputs);
  });
});
