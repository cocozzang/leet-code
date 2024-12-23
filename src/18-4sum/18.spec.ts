import { fourSum } from "./18";

describe("Q18", () => {
  it("case test", () => {
    const inputs = [
      { nums: [1, 0, -1, 0, -2, 2], target: 0 },
      { nums: [2, 2, 2, 2, 2], target: 8 },
      { nums: [0, 0, 0, 0], target: 0 },
      { nums: [-3, -2, -1, 0, 0, 1, 2, 3], target: 0 },
      { nums: [-2, -1, -1, 1, 1, 2, 2], target: 0 },
    ];

    const outputs: number[][][] = [];

    const expected = [
      [
        [-2, -1, 1, 2],
        [-2, 0, 0, 2],
        [-1, 0, 0, 1],
      ],
      [[2, 2, 2, 2]],
      [[0, 0, 0, 0]],
      [
        [-3, -2, 2, 3],
        [-3, -1, 1, 3],
        [-3, 0, 0, 3],
        [-3, 0, 1, 2],
        [-2, -1, 0, 3],
        [-2, -1, 1, 2],
        [-2, 0, 0, 2],
        [-1, 0, 0, 1],
      ],
      [
        [-2, -1, 1, 2],
        [-1, -1, 1, 1],
      ],
    ];

    inputs.forEach((value) => {
      outputs.push(fourSum(value.nums, value.target));
    });

    expect(outputs).toEqual(expected);
  });
});
