/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类 the head
 * @return bool布尔型
 */
function isPail(head) {
  // write code here
  if (!head || !head.next) return head;
  //快慢指针找到链表中点
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //反转后半部分链表
  let prev = null;
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  // 比较前半部分和后半部分链表
  while (prev) {
    if (prev.val !== head.val) {
      return false;
    }
    prev = prev.next;
    head = head.next;
  }
  return true;
}

module.exports = {
  isPail: isPail,
};
