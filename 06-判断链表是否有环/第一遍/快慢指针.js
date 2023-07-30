function ListNode(x) {
  this.val = x;
  this.next = null;
}
/**
 *
 * @param head ListNode类
 * @return bool布尔型
 */
function hasCycle(head) {
  // write code here
  if (!head) return false;
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}
