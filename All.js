'use strict';


// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }
//   insert(value) {
//     const node = new Node(value);
//     if (this.head) {
//       node.next = this.head;
//       this.head = node;
//     } else {
//       this.head = node;
//     }
//   }
//   append(value) {
//     const node = new Node(value);
//     if (this.head) {
//       let currentNode = this.head;
//       while (currentNode.next) {
//         currentNode = currentNode.next;
//       }
//       return currentNode.next = node;
//     } else {
//       return this.head = node;
//     }
//   }
//   deleteLast() {
//     if (this.head) {
//       let currentNode = this.head;
//       let i = 0
//       while (currentNode.next) {
//         currentNode = currentNode.next;
//         i++;
//       }
//       let header = this.head;
//       for (let y = 1; y < i; y++) {
//         header = header.next;
//       }
//       header.next = null;
//       return header;
//     } else {
//       return this.head;
//     }
//   }
//   getLast() {
//     let currentNode = this.head;
//     while (currentNode.next) {
//       currentNode = currentNode.next;
//     }
//     return currentNode.value;
//   }

// }
// class Stack {
//   constructor() {
//     this.storage = new LinkedList();
//     this.top = null
//   }
//   push(value) {
//     this.top = this.storage.append(value);
//   };
//   pop() {
//     if (this.storage.deleteLast()) {
//       return this.top = this.storage.deleteLast()
//     } else {
//       return (`We cant Pop, stack is empty!!`);
//     }
//   }
//   peek() {
//     if (this.storage.head) {
//       return this.top.value;
//       // return this.storage.getLast(); this one is working will
//     } else {
//       return (`Nothing to peek, stack is empty!!`);
//     }

//   }
//   isEmpty() {
//     if (this.storage.head) {
//       return 0;
//     } else {
//       return 1;
//     }
//   }
// }
// class Queue {
//   constructor() {
//   }
// }