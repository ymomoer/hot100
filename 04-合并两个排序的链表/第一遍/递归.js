function ListNode(x) {
  this.val = x;
  this.next = null;
}

function Merge(pHead1, pHead2) {
  if (pHead1 === null && pHead2 === null) return null;
  if (pHead1 === null || pHead2 === null) return pHead1 ? pHead1 : pHead2;
  let dummyNode = new ListNode(-1);
  if (pHead1.val <= pHead2.val) {
    dummyNode.next = pHead1;
    pHead1.next = Merge(pHead1.next, pHead2);
  } else {
    dummyNode.next = pHead2;
    pHead2.next = Merge(pHead1, pHead2.next);
  }
  return dummyNode.next;
}

let pHead1 = new ListNode(1);
let node1 = new ListNode(2);
let node2 = new ListNode(3);
let node3 = new ListNode(4);
let node4 = new ListNode(5);

pHead1.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

let pHead2 = new ListNode(2);
let node5 = new ListNode(3);
let node6 = new ListNode(5);
let node7 = new ListNode(7);
let node8 = new ListNode(9);

pHead2.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;

Merge(pHead1, pHead2);
