// Implement a Linked List Node Class

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add To The End
  add(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      console.log("added! " + val)
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      console.log("added! " + val);
    }
    this.size++;
  }

  //Remove the head of a Node
  removeHead() {
    let current = this.head;
    this.head = current.next;
    this.size--;
  }

  // Insert Value At Specific Index
  insertAt(val, index) {
    if (index > 0 && index > this.size) {
      console.log("Index Is Out Of Range");
      return false;
    }
    let newNode = new Node(val);
    let curr = this.head;
    let prev;
    if (index === 0) {
      newNode.next = head;
      this.head = newNode;
    } else {
      curr = this.head;
      let position = 0;
      while (position < index) {
        position++;
        prev = curr;
        curr = curr.next;
      }
      newNode.next = curr;
      prev.next = newNode;
    }
    this.size++;
  }

  // Retrieve Value from Index
  get(index) {
    if (index > 0 && index > this.size) {
      console.log("invalid index");
      return false;
    }
    let curr = this.head;
    let count = 0;
    if (index === 0) {
      console.log(this.head.val);
    } else {
      while (count < index) {
        count++;
        curr = curr.next;
      }
      console.log("index " + index + ": " + curr.val);
    }
  }

  // Remove a certain index of the List
  removeAt(index) {
    if (index > 0 && index > this.size) {
      console.log("invalid index");
      return false;
    }
    let current = this.head;
    let prev = current;
    let count = 0;
    //If the index is the head
    if (index === 0) {
      this.head = current.next;
    } else {
      //get to that position
      while (count < index) {
        count++;
        prev = current;
        current = current.next;
      }
      //Remove it
      prev.next = current.next;
    }
    this.size--
  }

  // Return Length Of List
  size() {
    console.log(this.size);
  }

  // Boolean if List is Empty
  isEmpty() {
    return this.size === 0;
  }

  // Returns the index of the node of a certain value
  indexOf(val) {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      if (current.val === val) {
        console.log(val + " is currently at index " + count);
        return count;
      }
      count++;
      current = current.next;
    }

    console.log(val + " was not found in the list");
    return -1;
  }

  // Traverse the list, displaying node index and value
  displayList() {
    let i = 0;
    let curr = this.head;
    let str = "";
    while (curr) {
      str += i + ". " + curr.val + " ";
      curr = curr.next;
      i++;
    }
    console.log(str);
  }
}

let list = new LinkedList();
let node = new Node("ghahah");
console.log(node);
// console.log(list.isEmpty());
// list.add("stay");
// list.add("strong");
// list.add("forever")
// console.log(list.size);
// list.insertAt("is fun", 2);
// list.displayList();
// list.get(2);
// list.indexOf("isnt it");
// list.removeAt(2);
// list.removeHead();
// list.displayList();
// console.log(list.size);
