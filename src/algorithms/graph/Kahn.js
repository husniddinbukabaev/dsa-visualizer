export function kahnSteps(graph) {
    const indegree = {};
    const steps = [];
    const queue = [];
    const result = [];
  
    Object.keys(graph).forEach(v => {
      indegree[v] = 0;
    });
  
    for (let u in graph) {
      graph[u].forEach(v => indegree[v]++);
    }
  
    Object.keys(indegree).forEach(v => {
      if (indegree[v] === 0) queue.push(v);
    });
  
    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node);
  
      steps.push({
        current: node,
        queue: [...queue],
        indegree: { ...indegree },
        result: [...result]
      });
  
      for (let nei of graph[node]) {
        indegree[nei]--;
        if (indegree[nei] === 0) {
          queue.push(nei);
        }
      }
    }
  
    return steps;
  }
  