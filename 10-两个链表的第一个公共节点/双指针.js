function ListNode(x) {
  this.val = x;
  this.next = null;
}
function FindFirstCommonNode(pHead1, pHead2) {
  // write code here
  if (pHead1 === null || pHead2 === null) return null;
  let p1 = pHead1;
  let p2 = pHead2;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
    if (p1 === p2) break;
    if (p1 === null) p1 = pHead2;
    if (p2 === null) p2 = pHead1;
  }
  return p1;
}
