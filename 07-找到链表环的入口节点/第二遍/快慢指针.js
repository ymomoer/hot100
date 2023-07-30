/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
  if (pHead === null) return null;
  let slow = pHead;
  let fast = pHead;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }
  if (fast === null || fast.next === null) return null;
  slow = pHead;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}
module.exports = {
  EntryNodeOfLoop: EntryNodeOfLoop,
};
