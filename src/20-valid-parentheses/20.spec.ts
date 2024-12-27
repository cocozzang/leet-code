import { isValid } from "./20";

describe("Q20", () => {
  it("case test", () => {
    const inputs = [
      "()()",
      "()[]{}",
      "(]",
      "([])",
      "({}[])[]",
      "([)]",
      "(){",
      "(){}}{",
    ];
    const outputs: boolean[] = [];
    const expected = [true, true, false, true, true, false, false, false];

    inputs.forEach((value) => {
      outputs.push(isValid(value));
    });

    expect(outputs).toEqual(expected);
  });
});
