import { ListNode, removeNthFromEnd } from "./19";

describe("Q19", () => {
  const genListnodeFromArray = (arr: number[]): ListNode | null => {
    if (arr.length === 0) return null;
    const [first, ...rest] = arr;

    return new ListNode(first, genListnodeFromArray(rest));
  };

  const listNodeEquals = (
    node1: ListNode | null,
    node2: ListNode | null,
  ): boolean => {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null) return false;
    if (node1.val !== node2.val) return false;
    return listNodeEquals(node1.next, node2.next);
  };

  it("case test", () => {
    const inputs = [
      { head: [1, 2, 3, 4, 5], n: 2 },
      { head: [1], n: 1 },
      { head: [1, 2], n: 1 },
    ];
    const expected = [[1, 2, 3, 5], [], [1]];

    const outputsLN: (ListNode | null)[] = [];
    const expectedLN: (ListNode | null)[] = [];

    const compareOutputs: boolean[] = [];
    const compareExpected = Array.from({ length: expected.length }, () => true);

    inputs.forEach((value) => {
      const ln = genListnodeFromArray(value.head);
      outputsLN.push(removeNthFromEnd(ln, value.n));
    });

    expected.forEach((value) => {
      const ln = genListnodeFromArray(value);
      expectedLN.push(ln);
    });

    expectedLN.forEach((value, index) => {
      compareOutputs.push(listNodeEquals(value, outputsLN[index]));
    });

    expect(compareOutputs).toEqual(compareExpected);
  });
});
