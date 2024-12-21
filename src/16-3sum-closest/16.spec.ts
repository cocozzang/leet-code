import { threeSumClosest } from "./16";

describe("Q16", () => {
  it("case test", () => {
    const inputs = [
      { nums: [0, 0, 0], target: 1 },
      { nums: [-1, 2, 1, -4], target: 1 },
    ];
    const outputs: number[] = [];
    const expected = [0, 2];

    inputs.forEach((value) => {
      outputs.push(threeSumClosest(value.nums, value.target));
    });

    expect(outputs).toEqual(expected);
  });
});
