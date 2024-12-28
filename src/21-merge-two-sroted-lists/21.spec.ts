import { ListNode, mergeTwoLists } from "./21";

export const genListnodeFromArray = (arr: number[]): ListNode | null => {
  if (arr.length === 0) return null;
  const [first, ...rest] = arr;

  return new ListNode(first, genListnodeFromArray(rest));
};
describe("Q21", () => {
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
      { list1: [1, 2, 4], list2: [1, 3, 4] },
      { list1: [], list2: [] },
      { list1: [], list2: [0] },
    ];
    const expected = [[1, 1, 2, 3, 4, 4], [], [0]];

    const outputsLN: (ListNode | null)[] = [];
    const expectedLN: (ListNode | null)[] = [];

    const compareOutputs: boolean[] = [];
    const compareExpected = Array.from({ length: expected.length }, () => true);

    inputs.forEach((value) => {
      outputsLN.push(
        mergeTwoLists(
          genListnodeFromArray(value.list1)!,
          genListnodeFromArray(value.list2)!,
        ),
      );
    });

    expected.forEach((value) => {
      expectedLN.push(genListnodeFromArray(value));
    });

    expectedLN.forEach((value, index) => {
      compareOutputs.push(listNodeEquals(value, outputsLN[index]));
    });

    expect(compareOutputs).toEqual(compareExpected);
  });
});
