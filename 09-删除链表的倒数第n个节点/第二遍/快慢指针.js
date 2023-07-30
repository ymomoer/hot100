/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @param n int整型
 * @return ListNode类
 */
function removeNthFromEnd(head, n) {
  // write code here
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let slow = dummyNode;
  let fast = dummyNode;
  for (i = 0; i <= n; i++) {
    fast = fast.next;
  }
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummyNode.next;
}

module.exports = {
  removeNthFromEnd: removeNthFromEnd,
};
