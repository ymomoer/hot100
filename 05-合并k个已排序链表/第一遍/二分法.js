function mergeKLists(lists) {
  // write code here
  return mergeKListsRecur(lists, 0, lists.length - 1);
}

function mergeKListsRecur(lists, left, right) {
  if (left >= right) {
    return lists[left];
  }
  let mid = Math.floor((left + right) / 2);
  let l = mergeKListsRecur(lists, left, mid);
  let r = mergeKListsRecur(lists, mid + 1, right);
  return Merge(l, r);
}

function Merge(pHead1, pHead2) {
  if (pHead1 === null && pHead2 === null) return null;
  if (pHead1 === null || pHead2 === null) return pHead1 ? pHead1 : pHead2;
  let dummyNode = new ListNode(-1);
  let cur = dummyNode;
  while (pHead1 && pHead2) {
    if (pHead1.val <= pHead2.val) {
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
