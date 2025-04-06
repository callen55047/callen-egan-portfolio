type IEdge = [number, number, number]

class Dijkstra {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @param {number} src
   * @returns {Object}
   */
  shortestPath(n: number, edges: IEdge, src: number) {

    // build adjaceny list
    const graph = new Map();
    for (let i = 0; i < n; i++) {
      // fill with blank values
      graph.set(i, []);
    }

    // u = source
    // v = destination
    // w = weight
    // @ts-ignore
    for (const [u, v, w] of edges) {
      // loop through and group sources
      graph.get(u).push([v, w])
    }

    // list of distances
    let dist = new Array(n).fill(Infinity);
    dist[src] = 0;
    // init with distanct: 0, starting: src
    let pq = new CustomQueue((a,b) => b[0] - a[0]);
    // init with zero distance to source
    pq.push([0, src])

    while (!pq.isEmpty()) {
      const [currentDist, u] = pq.pop();

      // skip if current is greater than known shortest
      if (currentDist > dist[u]) continue;

      // ForEach adjacent vertices, find smallest dest
      for (const [v, w] of graph.get(u)) {
        const newDist = currentDist + w;
        if (newDist < dist[v]) {
          // assign new smallest value for output
          dist[v] = newDist;
          // push new distance for v?
          pq.push([newDist, v]);
        }
      }
    }

    return dist.map(d => (d === Infinity ? -1 : d));
  }
}

class CustomQueue<T> {
  compare: (a: T, b: T) => number
  data: T[]

  constructor(compare: (a: T, b: T) => number) {
    this.compare = compare;
    this.data = [];
  }

  push(item: T) {
    this.data.push(item);
    this.data.sort(this.compare);
  }

  pop(): T | undefined {
    return this.data.shift();
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }
}