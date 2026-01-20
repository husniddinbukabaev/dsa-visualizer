import { useState } from "react";
import { selectionSortSteps } from "../../algorithms/sorting/SelectionSort";

export default function SelectionSortVisualizer() {
  const initialArray = [6, 3, 9, 1, 5];

  const [array, setArray] = useState(initialArray);
  const [timeouts, setTimeouts] = useState([]);

  const clearAllTimeouts = () => {
    timeouts.forEach(t => clearTimeout(t));
    setTimeouts([]);
  };

  const start = () => {
    clearAllTimeouts();

    const steps = selectionSortSteps(array);
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
      <h1>Selection Sort</h1>
      <p style={{ color: "#555", marginBottom: 20 }}>
        Selection Sort algoritmi har bir qadamda
        eng kichik elementni topib,
        uni boshiga joylashtiradi.
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
              width: 40,
              height: value * 22,
              background: "#fbbf24",
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
{`function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
}`}
      </pre>
    </div>
  );
}
