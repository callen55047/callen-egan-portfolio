type TContainer<T> = { [key: number]: T }

class DynamicArray<T> {
  private capacity: number;
  private size: number;
  private data: TContainer<T>;

  /**
   * @constructor
   * @param {number} capacity
   */
  constructor(capacity: number) {
    this.capacity = capacity;
    this.size = 0;
    this.data = {};
  }

  /**
   * @param {number} i
   * @returns {number}
   */
  get(i: number) {
    return this.data[i];
  }

  /**
   * @param {number} i
   * @param {number} n
   * @returns {void}
   */
  set(i: number, n: T) {
    this.data[i] = n;
  }

  /**
   * @param {number} n
   * @returns {void}
   */
  pushback(n: T) {
    if (this.size === this.capacity) {
      this.resize();
    }

    this.data[this.size] = n;
    this.size++;
  }

  /**
   * @returns {number}
   */
  popback(): T {
    const value = this.data[this.size - 1];
    delete this.data[this.size - 1];
    this.size--;
    return value;
  }

  /**
   * @returns {void}
   */
  resize() {
    this.capacity *= 2;
    const newData: TContainer<T> = {};
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
  }

  /**
   * @returns {number}
   */
  getSize(): number {
    return this.size;
  }

  /**
   * @returns {number}
   */
  getCapacity(): number {
    return this.capacity;
  }
}