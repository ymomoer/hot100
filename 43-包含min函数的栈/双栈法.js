let stack1 = [];
let stack2 = [];

function push(node) {
  stack1.push(node);
  if ((stack2.length === 0) | (stack2[stack2.length - 1] >= node)) {
    stack2.push(node);
  }
}

function pop() {
  if (stack1.length === 0) {
    return undefined;
  }
  if (stack1.pop() === stack2[stack2.length - 1]) {
    return stack2.pop();
  }
}

function top() {
  return stack1[stack1.length - 1];
}

function min() {
  return stack2[stack2.length - 1];
}
