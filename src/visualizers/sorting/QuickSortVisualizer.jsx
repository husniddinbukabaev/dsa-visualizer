import { useState } from "react";
import { quickSortSteps } from "../../algorithms/sorting/QuickSort";

export default function QuickSortVisualizer() {
  const initialArray = [10, 7, 8, 9, 1, 5];

  const [array, setArray] = useState(initialArray);
  const [timeouts, setTimeouts] = useState([]);

  const clearAllTimeouts = () => {
    timeouts.forEach(t => clearTimeout(t));
    setTimeouts([]);
  };

  const start = () => {
    clearAllTimeouts();

    const steps = quickSortSteps(array);
    const newTimeouts = [];

    steps.forEach((step, i) => {
      const t = setTimeout(() => {
        setArray(step);
      }, i * 500);
      newTimeouts.push(t);
    });

    setTimeouts(newTimeouts);
  };

  const reset = () => {
    clearAllTimeouts();
    setArray(initialArray);
  };

  return (
    <div>
      {/* 1️⃣ TITLE + DESCRIPTION */}
      <h1>Quick Sort</h1>
      <p style={{ color: "#555", marginBottom: 20 }}>
        Quick Sort — divide and conquer algoritmi bo‘lib,
        pivot element atrofida array’ni bo‘lib,
        juda tez ishlashi bilan mashhur.
      </p>

      {/* 2️⃣ VISUALIZATION */}
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "flex-end",
          height: 200,
          marginBottom: 20
        }}
      >
        {array.map((value, i) => (
          <div
            key={i}
            style={{
              width: 35,
              height: value * 18,
              background: "#fb7185",
              borderRadius: 6
            }}
          />
        ))}
      </div>

      {/* 3️⃣ CONTROLS */}
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={start}>▶ Start</button>
        <button onClick={reset}>🔁 Reset</button>
      </div>

      {/* 4️⃣ CODE */}
      <h3 style={{ marginTop: 30 }}>Algorithm Code</h3>

      <pre
        style={{
          background: "#0f172a",
          color: "#e5e7eb",
          padding: 16,
          borderRadius: 8,
          overflowX: "auto"
        }}
      >
{`function quickSort(arr, low, high) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[high]] = [arr[high], arr[i]];
  return i;
}`}
      </pre>
    </div>
  );
}
