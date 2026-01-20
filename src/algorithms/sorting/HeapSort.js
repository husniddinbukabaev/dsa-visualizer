export function heapSortSteps(arr) {
    const steps = [];
    const a = [...arr];
    const n = a.length;
  
    function swap(i, j) {
      [a[i], a[j]] = [a[j], a[i]];
      steps.push([...a]);
    }
  
    function heapify(n, i) {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
  
      if (left < n && a[left] > a[largest]) {
        largest = left;
      }
  
      if (right < n && a[right] > a[largest]) {
        largest = right;
      }
  
      if (largest !== i) {
        swap(i, largest);
        heapify(n, largest);
      }
    }
  
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(n, i);
    }
  
    // Extract elements from heap
    for (let i = n - 1; i > 0; i--) {
      swap(0, i);
      heapify(i, 0);
    }
  
    return steps;
  }
  