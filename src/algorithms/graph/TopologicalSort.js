export function topoSortSteps(graph) {
    const steps = [];
    const indegree = {};
    const queue = [];
  
    // 1. Indegree hisoblash
    Object.keys(graph).forEach(node => {
      indegree[node] = 0;
    });
  
    Object.entries(graph).forEach(([u, neighbors]) => {
      neighbors.forEach(v => {
        indegree[v]++;
      });
    });
  
    // 2. Indegree 0 bo‘lganlarni queue ga qo‘shish
    Object.keys(indegree).forEach(node => {
      if (indegree[node] === 0) {
        queue.push(node);
        steps.push({ type: "enqueue", node });
      }
    });
  
    // 3. BFS-like jarayon
    while (queue.length > 0) {
      const u = queue.shift();
      steps.push({ type: "process", node: u });
  
      for (const v of graph[u]) {
        indegree[v]--;
        steps.push({ type: "decrease", from: u, to: v });
  
        if (indegree[v] === 0) {
          queue.push(v);
          steps.push({ type: "enqueue", node: v });
        }
      }
    }
  
    return steps;
  }
  