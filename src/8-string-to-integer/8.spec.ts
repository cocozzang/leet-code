import { myAtoi } from "./8";

describe("Q8 test", () => {
  it("case test", () => {
    const inputs = [
      "+1",
      "42",
      " -042",
      "1337c0d3",
      "0-1",
      "words and 987",
      (Math.pow(2, 31) - 1 + 1).toString(),
      (Math.pow(-2, 31) - 1).toString(),
    ];
    const answer = [
      1,
      42,
      -42,
      1337,
      0,
      0,
      Math.pow(2, 31) - 1,
      Math.pow(-2, 31),
    ];

    const ouputs: number[] = [];

    inputs.map((input) => {
      ouputs.push(myAtoi(input));
    });

    expect(ouputs).toEqual(answer);
  });
});
