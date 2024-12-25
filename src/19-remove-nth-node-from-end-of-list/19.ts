export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const removeNthFromEnd = (
  head: ListNode | null,
  n: number,
): ListNode | null => {
  if (head === null) return null;

  let count = 0;

  const removeNthNode = (node: ListNode | null): ListNode | null => {
    if (node === null) {
      return null;
    }

    node.next = removeNthNode(node.next);

    count++;

    // n번째 노드를 건너뛰기
    if (count === n) {
      return node.next; // n번쨰 노드는 하위스택에 자신 next node를 return
    }

    return node;
  };

  return removeNthNode(head);
};

const genListnodeFromArray = (arr: number[]): ListNode | null => {
  if (arr.length === 0) return null;
  const [first, ...rest] = arr;

  return new ListNode(first, genListnodeFromArray(rest));
};

console.log(removeNthFromEnd(genListnodeFromArray([1, 2, 3, 4, 5]), 2));
