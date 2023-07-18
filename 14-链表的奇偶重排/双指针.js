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
 * @return ListNode类
 */

function oddEvenList(head) {
  // write code here
  if (head === null) return head;
  let odd = head;
  let even = head.next;
  let evenhead = even;
  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenhead;
  return head;
}

module.exports = {
  oddEvenList: oddEvenList,
};
