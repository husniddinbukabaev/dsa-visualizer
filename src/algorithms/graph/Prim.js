export function primSteps(graph, start) {
    const visited = new Set([start]);
    const steps = [];
    const mst = [];
    let totalWeight = 0;
  
    while (visited.size < Object.keys(graph).length) {
      let minEdge = null;
  
      for (let u of visited) {
        for (let v in graph[u]) {
          if (!visited.has(v)) {
            const w = graph[u][v];
            if (!minEdge || w < minEdge.weight) {
              minEdge = { from: u, to: v, weight: w };
            }
          }
        }
      }
  
      mst.push(minEdge);
      totalWeight += minEdge.weight;
      visited.add(minEdge.to);
  
      steps.push({
        current: minEdge.to,
        visited: Array.from(visited),
        mst: [...mst],
        totalWeight
      });
    }
  
    return steps;
  }
  