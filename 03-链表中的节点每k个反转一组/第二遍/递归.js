function reverseKGroup(head, k) {
  // write code here
  let pre = null;
  let current = head;
  let node = head;
  for (let i = 0; i < k; i++) {
    if (node === null) {
      return head;
    }
    node = node.next;
  }
  for (let i = 0; i < k; i++) {
    let t = current.next;
    current.next = pre;
    pre = current;
    current = t;
  }

  head.next = reverseKGroup(current, k);
  return pre;
}
