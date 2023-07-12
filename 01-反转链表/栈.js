function ListNode(x) {
  this.val = x;
  this.next = null;
}

function ReverseList(pHead) {
  if (pHead === null || pHead.next === null) {
    return pHead;
  }
  let arr = new Array();
  while (pHead != null) {
    arr.push(pHead);
    pHead = pHead.next;
  }
  let newHead = arr.pop();
  let cur = newHead;
  while (arr.length > 0) {
    cur.next = arr.pop();
    cur = cur.next;
    cur.next = null;
  }
  return newHead;
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

ReverseList(pHead);
