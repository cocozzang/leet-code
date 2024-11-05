class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1?: ListNode | null,
  l2?: ListNode | null,
  carry: number = 0,
): ListNode | null {
  if (!l1 && !l2 && !carry) return null;

  const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

  carry = parseInt(sum / 10 + "");

  return new ListNode(sum % 10, addTwoNumbers(l1?.next, l2?.next, carry));
}

describe("2 add two numbers test", () => {
  /** input받은 array로 linked list를 만들어 주세용 */
  const gen_listnode = (arr: number[]): ListNode | null => {
    if (arr.length === 0) return null;
    const [first, ...rest] = arr;

    return new ListNode(first, gen_listnode(rest));
  };

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
