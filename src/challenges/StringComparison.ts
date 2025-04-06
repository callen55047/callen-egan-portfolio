class StringComparison {

  /*
  * sample input
  * word1 = abbbcc
  * word2 = aaabbc
  *
  * Unique chars and frequency of unique chars must match
   */
  closeStrings(word1: string, word2: string): boolean {
    // lengths must at least match
    if (word1.length !== word2.length) {
      return false;
    }

    const fmap1 = this.buildFrequencyMap(word1);
    // map = { 'a' => 1, b => 2, ... }
    const fmap2 = this.buildFrequencyMap(word2);

    const uniqueChars1 = new Set(word1);
    // set = { 'a', 'b', ... }
    const uniqueChars2 = new Set(word2);

    // unique characters must match
    if ([...uniqueChars1].sort().join("") !== [...uniqueChars2].sort().join("")) {
      return false;
    }

    // frequencies distribution must match
    if (
      JSON.stringify([...fmap1.values()].sort()) !==
      JSON.stringify([...fmap2.values()].sort())
    ) {
      // freq map values = [ 1, 2, ... ]
      return false;
    }

    return true
  };

  buildFrequencyMap(word: string): Map<string, number> {
    const map = new Map<string, number>();
    for (const char of word) {
      // for each char, increment the occurrence
      map.set(char, (map.get(char) || 0) + 1);
    }
    return map;
  }

}