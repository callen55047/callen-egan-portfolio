class InsertionSort {
  /**
   * @param {Pair[]} pairs
   * @returns {Pair[][]}
   */
  insertionSort(pairs: Pair[]): Pair[][] {
    // handle empty
    if (pairs.length < 1) {
      return [];
    }

    // IMPORTANT!! must use slice() in order to not modify original array
    let states = [pairs.slice()];
    let currentState = pairs.slice();

    for (let i = 1; i < currentState.length; i++) {
      const currentPair = currentState[i];
      let newIndex = -1;

      // only iterate over the items we have already sorted
      for (let x = 0; x < i; x++) {
        if (currentPair.key < currentState[x].key) {
          newIndex = x;
          break;
        }
      }

      if (newIndex !== -1) {
        currentState.splice(i, 1);
        currentState.splice(newIndex, 0, currentPair);
      }
      states.push(currentState.slice());
    }

    return states;
  }
}

/**
 * Pair class to store key-value pairs
 */
class Pair {
  key: number
  value: string
  /**
   * @param {number} key The key to be stored in the pair
   * @param {string} value The value to be stored in the pair
   */
  constructor(key: number, value: string) {
    this.key = key;
    this.value = value;
  }
}