import { isPalindrome } from "./9";

describe("Q9", () => {
  it("case test", () => {
    const inputs = [121, -121, 10];
    const outputs: boolean[] = [];
    const expected = [true, false, false];

    inputs.map((num) => {
      outputs.push(isPalindrome(num));
    });

    expect(outputs).toEqual(expected);
  });
});
