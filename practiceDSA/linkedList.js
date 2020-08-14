class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // add
  append(value) {
    const newNode = { value: value, next: null };
    //if list is empty
    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = { value: value, next: this.head };
    this.head = newNode;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let curNode = this.head;

    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = curNode;
    }
  }

  search(value) {
    if (!this.head) {
      return null;
    }

    let curNode = this.head;
    while (curNode) {
      if (curNode.value === value) {
        return curNode;
      }
      curNode = curNode.next;
    }

    return "not found.";
  }

  toArray() {
    const elements = [];

    let curNode = this.head;
    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }

    return elements;
  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}

const LinkedList1 = new LinkedList();
LinkedList1.append(1);
LinkedList1.append("hey kevin");
LinkedList1.append("works");
LinkedList1.append(true);
LinkedList1.append(24241.21);

LinkedList1.prepend("first");

LinkedList1.delete("hey kevin");
LinkedList1.delete("first");
LinkedList1.delete(24241.21);

console.log(LinkedList1.search("works"));

console.log(LinkedList1.toArray());
