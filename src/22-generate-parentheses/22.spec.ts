import { generateParenthesis } from "./22";

describe("Q22", () => {
  it("case test", () => {
    const inputs = [3, 1];
    const outputs: string[][] = [];
    const expected = [
      ["((()))", "(()())", "(())()", "()(())", "()()()"],
      ["()"],
    ];

    inputs.forEach((value) => {
      outputs.push(generateParenthesis(value));
    });

    const sortedOutputs = outputs.map((arr) => [...arr].sort());
    const sortedExpected = expected.map((arr) => [...arr].sort());
    expect(sortedOutputs).toEqual(sortedExpected);
  });
});
