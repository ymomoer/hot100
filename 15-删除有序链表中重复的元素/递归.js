function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 *
 * @param head ListNode类
 * @return ListNode类
 */
function deleteDuplicates(head) {
  // write code here
  if (!head || !head.next) return head;
  head.next = deleteDuplicates(head.next);
  if (head.val === head.next.val) {
    head = head.next;
  }
  return head;
}
