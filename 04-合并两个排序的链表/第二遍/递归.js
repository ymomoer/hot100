function Merge(pHead1, pHead2) {
  let newHead = new ListNode(-1);
  if (pHead1 === null && pHead2 === null) return null;
  if (pHead1 === null) return pHead2;
  if (pHead2 === null) return pHead1;
  if (pHead1.val < pHead2.val) {
    newHead = pHead1;
    pHead1.next = Merge(pHead1.next, pHead2);
  } else {
    newHead = pHead2;
    pHead2.next = Merge(pHead1, pHead2.next);
  }
  return newHead;
}
