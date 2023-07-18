/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @return ListNode类
 */

function deleteDuplicates(head) {
  const node = new ListNode(-1);
  node.next = head;
  let p = node;
  let cur = head;
  while (cur !== null && cur.next !== null) {
    if (cur.val !== cur.next.val) {
      p = cur;
    } else {
      while (cur.next !== null && cur.val === cur.next.val) {
        cur = cur.next;
      }
      p.next = cur.next;
    }
    cur = cur.next;
  }
  return node.next;
}

module.exports = {
  deleteDuplicates: deleteDuplicates,
};
