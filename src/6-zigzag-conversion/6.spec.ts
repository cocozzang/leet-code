import { covert } from "./6";

describe("6번문제 테스트", () => {
  it("case test", () => {
    const inputs = [
      { s: "PAYPALISHIRING", numRows: 3 },
      { s: "PAYPALISHIRING", numRows: 4 },
      { s: "A", numRows: 1 },
    ];
    const outputs: string[] = [];
    const answer = ["PAHNAPLSIIGYIR", "PINALSIGYAHRPI", "A"];

    inputs.map((input) => {
      outputs.push(covert(input.s, input.numRows));
    });

    expect(outputs).toEqual(answer);
  });
});
