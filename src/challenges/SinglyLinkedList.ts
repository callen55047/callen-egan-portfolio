class SinglyLinkedList<T> {
  private head: Item<T> | null

  constructor() {
    this.head = null
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index: number) {
    if (index < 0) {
      return -1;
    }

    let current = this.head;
    for (let x = 0; x < index; x++) {
      if (!current || !current.next) {
        return -1;
      }
      current = current.next;
    }

    return current ? current.value : -1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val: T) {
    const previousHead = this.head;
    this.head = new Item(val);
    this.head.next = previousHead;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val: T) {
    const newNode = new Item(val);

    if (this.head == null) {
      this.head = newNode;
      // remember to return if we don't have a head yet
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index: number) {
    if (index < 0 || !this.head) return false;

    if (index === 0) {
      this.head = this.head.next;
      return true;
    }

    let current: Item<T> | null = this.head;
    let previous: Item<T> | null = null;
    let count = 0;

    while (current && count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    if (!current) return false;

    previous!.next = current.next;
    return true;
  }

  /**
   * @return {number[]}
   */
  getValues() {
    const output = [];
    let current = this.head;

    while (current != null) {
      output.push(current.value);
      current = current.next;
    }

    return output;
  }
}

class Item<T> {
  value: T
  next: Item<T> | null

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}