// 定义节点
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.freq = 1;
    this.pre = null;
    this.next = null;
  }
}

// 双向链表
class DualLinkedList {
  constructor(node) {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.pre = this.head;
  }

  // 移除
  remove(node) {
    node.pre.next = node.next;
    node.next.pre = node.pre;
  }

  // 插入节点(head之后)
  add(node) {
    node.next = this.head.next;
    this.head.next.pre = node;
    node.pre = this.head;
    this.head.next = node;
  }

  // 判空
  isEmpty() {
    return this.head.next == this.tail && this.tail.pre;
  }
}

class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.minFreq = 0;
    this.size = 0; //当前已使用的容量
    this.freqMap = new Map(); //freq-DualLinkedList
    this.cacheMap = new Map(); //key-node
  }
  increaseFreq(node) {
    let list = this.freqMap.get(node.freq);
    list.remove(node);
    if (list.isEmpty() && node.freq === this.minFreq) {
      this.minFreq += 1;
    }
    node.freq += 1;
    let newList = this.freqMap.get(node.freq);
    if (newList === undefined) {
      newList = new DualLinkedList();
    }
    newList.add(node);
    this.freqMap.set(node.freq, newList);
  }

  // 获取节点(value)
  get(key) {
    let node = this.cacheMap.get(key);
    if (node === undefined) {
      return -1;
    }
    this.increaseFreq(node);
    return node.value;
  }

  // 增加节点
  put(key, value) {
    if (this.capacity === 0) return;
    // 如果key已存在，则变更其值，增加访问频率
    if (this.cacheMap.has(key)) {
      let node = this.cacheMap.get(key);
      node.value = value;
      this.cacheMap.set(key, node);
      this.increaseFreq(node);
      return;
    }

    // 容量达到上限
    if (this.size === this.capacity) {
      // 获取最小频率队列(通过minFreq标记)
      let miniFreqList = this.freqMap.get(this.minFreq);
      // 获取最小频率队列的队尾（最小且最久）
      let miniFreqNode = miniFreqList.tail.pre;
      // 淘汰该节点
      miniFreqList.remove(miniFreqNode);
      this.freqMap.set(this.minFreq, miniFreqList);
      this.cacheMap.delete(miniFreqNode.key);
    }

    // 插入新节点
    let node = new Node(key, value);
    this.cacheMap.set(key, node);
    // freq为1的链表中，插入节点
    let list = this.freqMap.get(1);
    if (list === undefined) {
      list = new DualLinkedList();
    }
    list.add(node);

    this.freqMap.set(1, list);
    this.minFreq = 1;
    if (this.size < this.capacity) {
      this.size += 1;
    }
    return;
  }
}

function LFU(operators, k) {
  const lfu = new LFUCache(k);
  let result = [];
  operators.forEach(([op, key, value]) => {
    op == 1 ? lfu.put(key, value) : result.push(lfu.get(key));
  });
  return result;
}
