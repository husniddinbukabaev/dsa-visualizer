export function dfsSteps(graph, start) {
    const steps = [];
    const visited = new Set();
  
    function dfs(node) {
      visited.add(node);
      steps.push({ type: "visit", node });
  
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          steps.push({ type: "edge", from: node, to: neighbor });
          dfs(neighbor);
        }
      }
    }
  
    dfs(start);
    return steps;
  }
  