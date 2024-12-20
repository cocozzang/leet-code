import { threeSum } from "./15";

describe("Q15", () => {
  it("case test", () => {
    const inputs = [
      [-1, 0, 1, 2, -1, -4],
      [0, 1, 1],
      [0, 0, 0],
      [0, 0, 0, 0],
      [1, -1, -1, 0],
    ];
    const outputs: number[][][] = [];
    const expected = [
      [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
      [],
      [[0, 0, 0]],
      [[0, 0, 0]],
      [[-1, 0, 1]],
    ];

    inputs.forEach((value) => {
      outputs.push(threeSum(value));
    });

    expect(outputs).toEqual(expected);
  });
});
