import { letterCombinations } from "./17";

describe("Q17", () => {
  it("case test", () => {
    const inputs = ["23", "", "2"];
    const outputs: string[][] = [];
    const expected = [
      ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
      [],
      ["a", "b", "c"],
    ];

    inputs.forEach((value) => {
      outputs.push(letterCombinations(value));
    });

    expect(outputs).toEqual(expected);
  });
});
