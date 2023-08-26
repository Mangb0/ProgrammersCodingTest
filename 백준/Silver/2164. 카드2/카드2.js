var fs = require("fs");
var input = +fs.readFileSync("./dev/stdin").toString().trim();
// 삽입 삭제가 빈번한 경우 LinkedList를 사용하는 것이 좋다.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.head) this.head = newNode;
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.size++;

    return newNode;
  }

  getHead() {
    return this.head.data;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
  }

  getSize() {
    return this.size;
  }
}

const node = new LinkedList();

for (let i = 1; i <= input; i++) {
  node.add(i);
}

while (node.getSize() > 1) {
  node.removeHead();
  node.add(node.getHead());
  node.removeHead();
}

console.log(node.getHead());
