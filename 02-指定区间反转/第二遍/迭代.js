function ListNode(x) {
  this.val = x;
  this.next = null;
}
function reverseBetween(head, m, n) {
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let pre = dummyNode;
  let cur = head;
  for (i = 0; i < m - 1; i++) {
    pre = pre.next;
    cur = cur.next;
  }
  for (let i = 0; i < n - m; i++) {
    let temp = cur.next;
    cur.next = temp.next;
    temp.next = pre.next;
    pre.next = temp;
  }
  return dummyNode.next;
}
