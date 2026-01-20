export function bfsSteps(graph, start) {
    const steps = [];
    const visited = new Set();
    const queue = [];
  
    visited.add(start);
    queue.push(start);
  
    while (queue.length > 0) {
      const node = queue.shift();
      steps.push({ type: "visit", node });
  
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          steps.push({ type: "edge", from: node, to: neighbor });
          queue.push(neighbor);
        }
      }
    }
  
    return steps;
  }
  