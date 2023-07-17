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
  let p = head;
  let arr = [];
  while (true) {
    arr.unshift(p.val);
    if (p.next == null) break;
    p = p.next;
  }

  //在遍历链表时，代码中的变量 p 指向了链表的末尾，因此在第二个循环中需要重新将变量 p 指向链表的头节点，否则会导致第二个循环无法执行。
  p = head;
  let i = 0;
  while (p) {
    if (p.val !== arr[i++]) {
      return false;
    }

    if (p.next == null) break;
    p = p.next;
  }
  return true;
}

module.exports = {
  isPail: isPail,
};
