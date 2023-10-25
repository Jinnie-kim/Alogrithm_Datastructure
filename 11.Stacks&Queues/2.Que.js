// Implementation using Array

let q = [];

q.push('First');
q.push('Second');
q.push('Third');

q.shift(); // 'First'

// Or...
q.unshift('First');
q.unshift('Second');
q.unshift('Third');

q.pop(); // 'First'

// implementation using Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    let deleteNode = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return deleteNode.value;
  }
}
