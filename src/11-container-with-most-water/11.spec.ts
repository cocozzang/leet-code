import { maxArea } from "./11";

describe("Q11", () => {
  it("case test", () => {
    const inputs = [
      [1, 8, 6, 2, 5, 4, 8, 3, 7],
      [1, 1],
    ];
    const outputs: number[] = [];
    const expected = [49, 1];

    inputs.forEach((v) => {
      outputs.push(maxArea(v));
    });

    expect(expected).toEqual(outputs);
  });
});
