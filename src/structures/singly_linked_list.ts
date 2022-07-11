interface listNode<T> {
  key: number;
  payload: T;
  next: listNode<T> | null;
}

interface ISinglyLinkedList<T> {
  pushFront(data: T): void;
  pushBack(data: T): void;
  popFront(): void;
  popBack(): void;
  insert(key: listNode<T>["key"], data: T): void;
  erase(key: listNode<T>["key"]): void;
  getHead(): listNode<T> | null;
  getTail(): listNode<T> | null;
  findNode(key: listNode<T>["key"]): listNode<T> | false;
  getSize(): number;
  reverseList(): void;
  empty(): true | false;
}

export class SinglyLinkedList<T> implements ISinglyLinkedList<T> {
  private head: listNode<T> | null;
  private tail: listNode<T> | null;
  private size: number;
  constructor(data?: T) {
    if (data) {
      this.head = {
        key: 1,
        payload: data,
        next: null,
      };
      this.size = 1;
    } else {
      this.head = null;
      this.size = 0;
    }
    this.tail = this.head;
  }

  getHead(): listNode<T> | null {
    return this.head;
  }
  getTail(): listNode<T> | null {
    return this.tail;
  }

  getSize(): number {
    return this.size;
  }

  empty(): boolean {
    return !this.head;
  }

  pushBack(data: T): void {
    const node = {
      key: this.size + 1,
      payload: data,
      next: null,
    };
    if (!this.empty() && this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.size++;
    return;
  }

  popBack(): void {
    if (this.empty()) {
      console.log(new Error("List is empty"));
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    if (this.head) {
      let node = this.head;
      while (node.next !== this.tail && node.next) {
        node = node.next;
      }
      node.next = null;
      this.tail = node;
      this.size--;
    }
  }

  pushFront(data: T): void {
    const node = {
      key: 1,
      payload: data,
      next: this.head || null,
    };
    if (this.empty()) {
      this.head = node;
      this.tail = node;
    }

    let changeNextNode = this.head;
    while (changeNextNode?.next) {
      changeNextNode.key++;
      changeNextNode = changeNextNode.next;
    }
    if (changeNextNode) changeNextNode.key++;
    this.head = node;
    this.size++;
  }

  popFront(): void {
    if (this.empty()) {
      console.log(new Error("List is empty"));
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    if (this.head) {
      this.head = this.head.next;
      this.size--;
      let changeNextNode = this.head;
      while (changeNextNode?.next) {
        changeNextNode.key--;
        changeNextNode = changeNextNode.next;
      }
      if (changeNextNode) changeNextNode.key--;
    }
  }

  findNode(key: number): false | listNode<T> {
    let findNode = this.head;
    if (!findNode) return false;
    while (findNode.key !== key && findNode?.next !== null) {
      findNode = findNode.next;
    }
    if (findNode.key === key) return findNode;
    return false;
  }

  reverseList(): void {
    if (this.empty()) {
      console.log(new Error("List is empty"));
    }
    if (this.head === this.tail) return;

    let tmp: Array<listNode<T> | null> = [];
    let next = this.head;

    while (next?.next) {
      if (next) {
        tmp.push(next);
        next = next.next;
      }
    }
    tmp.push(next);

    this.head = tmp.pop() || null;
    this.tail = this.head;
    this.size = 1;
    while (tmp.length) {
      let { key, payload } = tmp.pop()!;
      if (payload) {
        this.pushBack(payload);
        this.tail!.key = key;
      }
    }
  }

  insert(key: number, data: T): void {
    const node = this.findNode(key);
    if (!node) {
      console.log(new Error("Key not found"));
    } else {
      const nextNode = node.next;
      node.next = {
        key: node.key + 1,
        payload: data,
        next: nextNode || null,
      };
      this.size++;
      let changeNode = nextNode;
      while (changeNode?.next) {
        changeNode.key++;
        changeNode = changeNode.next;
      }
      if (changeNode) changeNode.key++;
    }
  }

  erase(key: number): void {
    const node = this.findNode(key);
    const preNode = this.findNode(key - 1);
    if (!node) {
      console.log(new Error("Key not found"));
    } else if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
    } else {
      // const nextNode = node.next;
      if (preNode) {
        preNode.next = node.next;
        this.size--;
      }

      let changeNode = node.next;
      while (changeNode?.next) {
        changeNode.key--;
        changeNode = changeNode.next;
      }
      if (changeNode) changeNode.key--;
    }
  }
}
