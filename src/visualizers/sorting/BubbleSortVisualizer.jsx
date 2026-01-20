import { useState } from "react";
import { bubbleSortSteps } from "../../algorithms/sorting/BubbleSort";

export default function BubbleSortVisualizer() {
  const initialArray = [5, 3, 8, 4, 2];

  const [array, setArray] = useState(initialArray);
  const [timeouts, setTimeouts] = useState([]);

  const clearAllTimeouts = () => {
    timeouts.forEach(t => clearTimeout(t));
    setTimeouts([]);
  };

  const start = () => {
    clearAllTimeouts();

    const steps = bubbleSortSteps(array);
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
      <h1>Bubble Sort</h1>
      <p style={{ color: "#555", marginBottom: 20 }}>
        Bubble Sort — qo‘shni elementlarni solishtirib,
        katta elementlarni oxiriga “puflab” chiqaradigan
        oddiy sortlash algoritmi.
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
              height: value * 25,
              background: "#38bdf8",
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
{`function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}`}
      </pre>
    </div>
  );
}


