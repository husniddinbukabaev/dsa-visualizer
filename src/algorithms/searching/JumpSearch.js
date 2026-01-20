export function jumpSearchSteps(arr, target) {
    const steps = [];
    const n = arr.length;
    const step = Math.floor(Math.sqrt(n));
  
    let prev = 0;
    let curr = step;
  
    // Jump phase
    while (curr < n && arr[curr - 1] < target) {
      steps.push({
        type: "jump",
        prev,
        curr: curr - 1
      });
  
      prev = curr;
      curr += step;
    }
  
    // Linear search phase
    for (let i = prev; i < Math.min(curr, n); i++) {
      steps.push({
        type: "linear",
        index: i,
        found: arr[i] === target
      });
  
      if (arr[i] === target) break;
    }
  
    return steps;
  }
  