export function hashSearchSteps(table, key) {
    const steps = [];
  
    const hash = key % table.length;
  
    steps.push({
      type: "hash",
      index: hash
    });
  
    if (table[hash]?.key === key) {
      steps.push({
        type: "found",
        index: hash
      });
    } else {
      steps.push({
        type: "not-found",
        index: hash
      });
    }
  
    return steps;
  }
  