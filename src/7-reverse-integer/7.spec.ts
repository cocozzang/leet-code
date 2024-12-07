import { reverse } from "./7";

describe("7번문제", () => {
  it("case test", () => {
    const inputs = [123, -123, 120, 1534236469, 2147483648];
    const outpus: number[] = [];
    const answer = [321, -321, 21, 0, 0];

    inputs.map((input) => {
      outpus.push(reverse(input));
    });

    expect(outpus).toEqual(answer);
  });
});
