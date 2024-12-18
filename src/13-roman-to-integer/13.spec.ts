import { romanToInt } from "./13";

describe("Q13", () => {
  it("case test", () => {
    const inputs = ["III", "LVIII", "MCMXCIV"];
    const outputs: number[] = [];
    const expected = [3, 58, 1994];

    inputs.forEach((v) => {
      outputs.push(romanToInt(v));
    });

    expect(expected).toEqual(outputs);
  });
});
