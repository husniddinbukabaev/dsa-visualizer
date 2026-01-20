export function quickSortSteps(arr) {
    const steps = [];
    const a = [...arr];
  
    function swap(i, j) {
      [a[i], a[j]] = [a[j], a[i]];
      steps.push([...a]);
    }
  
    function partition(low, high) {
      const pivot = a[high];
      let i = low;
  
      for (let j = low; j < high; j++) {
        if (a[j] < pivot) {
          swap(i, j);
          i++;
        }
      }
      swap(i, high);
      return i;
    }
  
    function quickSort(low, high) {
      if (low < high) {
        const pi = partition(low, high);
        quickSort(low, pi - 1);
        quickSort(pi + 1, high);
      }
    }
  
    quickSort(0, a.length - 1);
    return steps;
  }
  