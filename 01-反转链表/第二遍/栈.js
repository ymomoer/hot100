function ListNode(x) {
  this.val = x;
  this.next = null;
}

function ReverseList(pHead) {
  if (pHead === null || pHead.next === null) {
    return pHead;
  }
  let arr = new Array();
  while (pHead != null) {
    arr.push(pHead);
    pHead = pHead.next;
  }
  let newHead = arr.pop();
  let cur = newHead;
  while (arr.length > 0) {
    cur.next = arr.pop();
    cur = cur.next;
    cur.next = null;
  }
  return newHead;
}
