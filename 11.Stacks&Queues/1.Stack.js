// Array implementaion
let stack = [];

stack.push('google');
stack.push('instagram');
stack.push('youtube');

stack.pop(); // 'youtube'

stack.push('amazon');
stack.pop(); // 'amazon'

let stack2 = [];

stack2.unshift('create new file');
stack2.unshift('resized file');

stack2.shift(); // 'resized file'

// Linked List implementation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }

    this.length++;

    return this.length;
  }

  pop() {
    if (!this.first) return null;

    let deletedNode = this.first;
    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next; // this.first to be null as well.

    this.length--;

    return deletedNode.value;
  }
}
