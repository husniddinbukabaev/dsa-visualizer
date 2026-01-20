export function mergeSortSteps(arr) {
    const steps = [];
    const a = [...arr];
  
    function merge(left, mid, right) {
      const leftArr = a.slice(left, mid + 1);
      const rightArr = a.slice(mid + 1, right + 1);
  
      let i = 0, j = 0, k = left;
  
      while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
          a[k++] = leftArr[i++];
        } else {
          a[k++] = rightArr[j++];
        }
        steps.push([...a]);
      }
  
      while (i < leftArr.length) {
        a[k++] = leftArr[i++];
        steps.push([...a]);
      }
  
      while (j < rightArr.length) {
        a[k++] = rightArr[j++];
        steps.push([...a]);
      }
    }
  
    function mergeSort(left, right) {
      if (left >= right) return;
  
      const mid = Math.floor((left + right) / 2);
      mergeSort(left, mid);
      mergeSort(mid + 1, right);
      merge(left, mid, right);
    }
  
    mergeSort(0, a.length - 1);
    return steps;
  }
  