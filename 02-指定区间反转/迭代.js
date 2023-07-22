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
 * @param m int整型
 * @param n int整型
 * @return ListNode类
 */
function reverseBetween(head, m, n) {
  // write code here
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  pre = dummyNode;
  cur = head;

  for (let i = 0; i < m - 1; i++) {
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
module.exports = {
  reverseBetween: reverseBetween,
};
