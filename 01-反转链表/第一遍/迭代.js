function ListNode(x) {
  this.val = x;
  this.next = null;
}
function ReverseList(pHead) {
  if (pHead === null || pHead.next === null) {
    return pHead;
  }
  let newHead = null;
  cur = pHead;
  while (cur !== null) {
    let temp = cur.next;
    cur.next = newHead;
    newHead = cur;
    cur = temp;
  }
  return newHead;
}
