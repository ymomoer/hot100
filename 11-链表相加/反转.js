/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head1 ListNode类
 * @param head2 ListNode类
 * @return ListNode类
 */
function addInList(head1, head2) {
  // write code here
  return addInListInOrder(head1, head2);
}

function reverseList(head) {
  if (head === null || head.next === null) return head;
  let pre = null,
    cur = head;
  while (cur) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
}

function addInListInOrder(head1, head2) {
  head1 = reverseList(head1);
  head2 = reverseList(head2);
  let pre = new ListNode(-1);
  let cur = pre;
  let carry = 0;
  while (head1 !== null || head2 != null) {
    let val1 = head1 !== null ? head1.val : 0;
    let val2 = head2 !== null ? head2.val : 0;
    let sum = (val1 + val2 + carry) % 10;
    carry = Math.floor((val1 + val2 + carry) / 10);
    cur.next = new ListNode(sum);
    if (head1) {
      head1 = head1.next;
    }
    if (head2) {
      head2 = head2.next;
    }
    cur = cur.next;
  }
  if (carry !== 0) {
    cur.next = new ListNode(carry);
  }
  return reverseList(pre.next);
}
module.exports = {
  addInList: addInList,
};
