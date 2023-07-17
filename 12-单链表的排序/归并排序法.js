function ListNode(x) {
  this.val = x;
  this.next = null;
}
/**
 *
 * @param head ListNode类 the head node
 * @return ListNode类
 */
function sortInList(head) {
  // write code here
  if (!head || !head.next) return head;

  // 将链表分成两个子链表
  let mid = getMidNode(head);
  let left = head;
  let right = mid.next;
  mid.next = null;

  // 递归对左右子链表进行排序
  left = sortInList(left);
  right = sortInList(right);

  // 合并两个有序子链表
  return merge(left, right);
}

//获取链表中间节点
function getMidNode(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// 合并两个有序链表
function merge(left, right) {
  let dummy = new ListNode(-1);
  let cur = dummy;
  while (left && right) {
    if (left.val < right.val) {
      cur.next = left;
      left = left.next;
    } else {
      cur.next = right;
      right = right.next;
    }
    cur = cur.next;
  }

  if (left) {
    cur.next = left;
  } else {
    cur.next = right;
  }

  return dummy.next;
}

module.exports = {
  sortInList: sortInList,
};
