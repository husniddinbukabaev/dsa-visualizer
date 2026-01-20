import { useState } from "react";
import { mergeSortSteps } from "../../algorithms/sorting/MergeSort";

export default function MergeSortVisualizer() {
  const initialArray = [8, 3, 7, 4, 9, 2, 6];

  const [array, setArray] = useState(initialArray);
  const [timeouts, setTimeouts] = useState([]);

  const clearAllTimeouts = () => {
    timeouts.forEach(t => clearTimeout(t));
    setTimeouts([]);
  };

  const start = () => {
    clearAllTimeouts();

    const steps = mergeSortSteps(array);
    const newTimeouts = [];

    steps.forEach((step, i) => {
      const t = setTimeout(() => {
        setArray(step);
      }, i * 600);
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
      <h1>Merge Sort</h1>
      <p style={{ color: "#555", marginBottom: 20 }}>
        Merge Sort — divide and conquer usuliga asoslangan
        samarali sortlash algoritmi. Array bo‘linadi va
        qayta birlashtirib saralanadi.
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
              height: value * 20,
              background: "#a78bfa",
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
{`function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
}`}
      </pre>
    </div>
  );
}
