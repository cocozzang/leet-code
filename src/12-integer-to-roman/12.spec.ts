import { intToRoman } from "./12";

describe("Q12", () => {
  it("case test", () => {
    const inputs = [3749, 58, 1994];
    const outputs: string[] = [];
    const expected = ["MMMDCCXLIX", "LVIII", "MCMXCIV"];

    inputs.forEach((v) => {
      outputs.push(intToRoman(v));
    });

    expect(expected).toEqual(outputs);
  });
});
