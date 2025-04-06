function EqualRowsAndColumns(grid: number[][]): number {
  let equalPairs = 0;

  const rowMap = new Map();
  for (let row of grid) {
    const key = row.join('-');
    rowMap.set(key, (rowMap.get(key) | 0) + 1);
  }

  for (let col = 0; col < grid.length; col++) {
    const column = [];
    for (let row = 0; row < grid[0].length; row++) {
      column.push(grid[row][col])
    }
    const key = column.join('-');
    if (rowMap.has(key)) {
      equalPairs += rowMap.get(key);
    }
  }

  return equalPairs;
};