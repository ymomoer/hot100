function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pHead ListNode类
 * @param k int整型
 * @return ListNode类
 */
function FindKthToTail(pHead, k) {
  // write code here
  if (pHead === null || k === 0) return null;
  let fast = pHead;
  let slow = pHead;

  for (let i = 0; i < k; i++) {
    if (fast === null) return fast;
    fast = fast.next;
  }

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

let pHead = new ListNode(1);
let node1 = new ListNode(2);
let node2 = new ListNode(3);
let node3 = new ListNode(4);
let node4 = new ListNode(5);

pHead.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

FindKthToTail(pHead, 4);
