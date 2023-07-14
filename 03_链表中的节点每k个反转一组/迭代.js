function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 *
 * @param head ListNode类
 * @param k int整型
 * @return ListNode类
 */
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

let head = new ListNode(1);
let node1 = new ListNode(2);
let node2 = new ListNode(3);
let node3 = new ListNode(4);
let node4 = new ListNode(5);

head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

reverseKGroup(head, 3);
