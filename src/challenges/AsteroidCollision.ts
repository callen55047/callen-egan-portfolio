function AsteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (const a of asteroids) {
    let current: number | null = a;
    let previous: number | null = stack[stack.length - 1] || null;

    // if we multiply and the result is less than zero, their opposite
    // only cancelled out if first positive, and next is negative... ?
    while (current && previous && (current < 0 && previous > 0)) {
      // only remove last element if it needs comparison
      previous = stack.pop() || null;

      // if they cancel each other out
      if (Math.abs(current) === Math.abs(previous!)) {
        // remove both previous and current
        current = null;
        previous = null;
      } else {
        // if our current is larger than previous
        if (Math.abs(current) > Math.abs(previous!)) {
          // move on to check previous item
          previous = stack[stack.length - 1];
        } else {
          // previous gets put back onto the stack
          stack.push(previous!);
          current = null;
          previous = null;
          // move onto next asteroid
        }
      }
    }

    // finally, if we have an item, push it into the stack
    if (current) {
      stack.push(current);
    }
  }

  return stack;
}