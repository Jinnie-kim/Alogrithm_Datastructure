// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// My version
// class Queue {
//   que = [];

//   add(n) {
//     this.que.unshift(n);
//   }

//   remove() {
//     return this.que.pop();
//   }
// }

// // Solution
class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;
