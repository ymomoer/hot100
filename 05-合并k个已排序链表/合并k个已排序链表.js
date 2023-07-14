function ListNode(x) {
  this.val = x;
  this.next = null;
}

function mergeKLists(lists) {
  function Merge(pHead1, pHead2) {
    let newNode = new ListNode(null);
    if (pHead1 == null) return pHead2;
    if (pHead2 == null) return pHead1;
    if (pHead1 == null && pHead2 == null) return null;
    if (pHead1.val < pHead2.val) {
      newNode = pHead1;
      newNode.next = Merge(pHead1.next, pHead2);
    } else {
      newNode = pHead2;
      newNode.next = Merge(pHead1, pHead2.next);
    }
    return newNode;
  }

  let newNode = null;
  for (i = 0; i < lists.length; i++) {
    newNode = Merge(newNode, lists[i]);
  }
  return newNode;
}
