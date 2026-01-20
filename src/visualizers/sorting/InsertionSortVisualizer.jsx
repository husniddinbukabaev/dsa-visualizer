import { useState } from "react";
import { insertionSortSteps } from "../../algorithms/sorting/InsertionSort";

export default function InsertionSortVisualizer() {
  const initialArray = [7, 4, 5, 2, 9];

  const [array, setArray] = useState(initialArray);
  const [timeouts, setTimeouts] = useState([]);

  const clearAllTimeouts = () => {
    timeouts.forEach(t => clearTimeout(t));
    setTimeouts([]);
  };

  const start = () => {
    clearAllTimeouts();

    const steps = insertionSortSteps(array);
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
      <h1>Insertion Sort</h1>
      <p style={{ color: "#555", marginBottom: 20 }}>
        Insertion Sort algoritmi elementlarni ketma-ket olib,
        ularni chap tomondagi saralangan qismga to‘g‘ri joylashtiradi.
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
              background: "#4ade80",
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
{`function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
}`}
      </pre>
    </div>
  );
}
