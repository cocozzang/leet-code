import { addTwoNumbers, gen_listnode, ListNode } from "./2-add-two-numbers";

describe("2 add two numbers test", () => {
  /** 두 리스트는 같나용? */
  function listNodeEquals(
    node1: ListNode | null,
    node2: ListNode | null,
  ): boolean {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null) return false;
    if (node1.val !== node2.val) return false;
    return listNodeEquals(node1.next, node2.next);
  }

  test("case1) input: l1 = [2,4,3], l2 = [5,6,4] / output: [7,0,8] ", () => {
    const arr_l1 = [2, 4, 3];
    const arr_l2 = [5, 6, 4];
    const expect_arr_listnode = [7, 0, 8];

    const l1 = gen_listnode(arr_l1);
    const l2 = gen_listnode(arr_l2);
    const expectOutput = gen_listnode(expect_arr_listnode);

    expect(listNodeEquals(addTwoNumbers(l1, l2), expectOutput)).toBe(true);
  });

  test("case2) input: l1 = [0], l2 = [0] / output: [0] ", () => {
    const arr_l1 = [0];
    const arr_l2 = [0];
    const expect_arr_listnode = [0];

    const l1 = gen_listnode(arr_l1);
    const l2 = gen_listnode(arr_l2);
    const expectOutput = gen_listnode(expect_arr_listnode);

    expect(listNodeEquals(addTwoNumbers(l1, l2), expectOutput)).toBe(true);
  });

  test("case3) input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] / output: [8,9,9,9,0,0,0,1]", () => {
    const arr_l1 = [9, 9, 9, 9, 9, 9, 9];
    const arr_l2 = [9, 9, 9, 9];
    const expect_arr_listnode = [8, 9, 9, 9, 0, 0, 0, 1];

    const l1 = gen_listnode(arr_l1);
    const l2 = gen_listnode(arr_l2);
    const expectOutput = gen_listnode(expect_arr_listnode);

    expect(listNodeEquals(addTwoNumbers(l1, l2), expectOutput)).toBe(true);
  });
});
