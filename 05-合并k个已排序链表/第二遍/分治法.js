function mergeKLists(lists) {
  // write code here
  function Merge(pHead1, pHead2) {
    let newHead = new ListNode(0);
    if (pHead1 === null && pHead2 === null) return null;
    if (pHead1 === null) return pHead2;
    if (pHead2 === null) return pHead1;
    if (pHead1.val < pHead2.val) {
      newHead = pHead1;
      newHead.next = Merge(pHead1.next, pHead2);
    } else {
      newHead = pHead2;
      newHead.next = Merge(pHead1, pHead2.next);
    }
    return newHead;
  }

  let newHead = null;
  for (let i = 0; i < lists.length; i++) {
    newHead = Merge(newHead, lists[i]);
  }
  return newHead;
}
