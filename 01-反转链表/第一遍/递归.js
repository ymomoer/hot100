function ListNode(x) {
  this.val = x;
  this.next = null;
}

function ReverseList(pHead) {
  if (pHead === null || pHead.next === null) return pHead;
  let newHead = ReverseList(pHead.next);
  pHead.next.next = pHead;
  pHead.next = null;
  return newHead;
}
