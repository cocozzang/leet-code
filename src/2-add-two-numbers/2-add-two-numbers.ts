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

const gen_listnode = (arr: number[]): ListNode | null => {
  if (arr.length === 0) return null;
  const [first, ...rest] = arr;

  return new ListNode(first, gen_listnode(rest));
};

const arr_l1 = [2, 4, 3];
const arr_l2 = [5, 6, 4];

const l1 = gen_listnode(arr_l1);
const l2 = gen_listnode(arr_l2);

const coco = addTwoNumbers(l1, l2);

console.log(coco);

export { ListNode, addTwoNumbers, gen_listnode };
