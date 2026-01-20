export function insertionSortSteps(arr) {
    const steps = [];
    const a = [...arr];
  
    for (let i = 1; i < a.length; i++) {
      let key = a[i];
      let j = i - 1;
  
      while (j >= 0 && a[j] > key) {
        a[j + 1] = a[j];
        steps.push([...a]);
        j--;
      }
  
      a[j + 1] = key;
      steps.push([...a]);
    }
  
    return steps;
  }
  