function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @param n int整型
 * @return ListNode类
 */
function removeNthFromEnd(head, n) {
  // write code here
  let dummy = new ListNode(0); // 创建一个虚拟头节点
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;

  // 让fast指针先向后移动n步
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // 同时移动fast和slow指针，直到fast指针到达链表末尾
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // 此时，slow指针的下一个节点就是要删除的节点
  slow.next = slow.next.next;

  return dummy.next; // 返回虚拟头节点的下一个节点
}
