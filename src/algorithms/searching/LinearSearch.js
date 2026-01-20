export function linearSearchSteps(arr, target) {
    const steps = [];
  
    for (let i = 0; i < arr.length; i++) {
      steps.push({
        array: [...arr],
        index: i,
        found: arr[i] === target
      });
  
      if (arr[i] === target) break;
    }
  
    return steps;
  }
  