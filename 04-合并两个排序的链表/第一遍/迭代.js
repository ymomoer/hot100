function Merge(pHead1, pHead2) {
  if (pHead1 === null && pHead2 === null) return null;
  if (pHead1 === null) return pHead2;
  if (pHead2 === null) return pHead1;
  let dummyNode = new ListNode(-1);
  let cur = dummyNode;
  while (pHead1 && pHead2) {
    if (pHead1.val < pHead2.val) {
      cur.next = pHead1;
      pHead1 = pHead1.next;
    } else {
      cur.next = pHead2;
      pHead2 = pHead2.next;
    }
    cur = cur.next;
  }
  cur.next = pHead1 ? pHead1 : pHead2;
  return dummyNode.next;
}
