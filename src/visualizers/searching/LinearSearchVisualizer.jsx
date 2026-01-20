import { useState } from "react";
import { linearSearchSteps } from "../../algorithms/searching/LinearSearch";

export default function LinearSearchVisualizer() {
  const initialArray = [4, 2, 7, 1, 9, 5];
  const target = 9;

  const [array] = useState(initialArray);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [foundIndex, setFoundIndex] = useState(null);
  const [timeouts, setTimeouts] = useState([]);

  const clearAllTimeouts = () => {
    timeouts.forEach(t => clearTimeout(t));
    setTimeouts([]);
    setCurrentIndex(null);
    setFoundIndex(null);
  };

  const start = () => {
    clearAllTimeouts();

    const steps = linearSearchSteps(array, target);
    const newTimeouts = [];

    steps.forEach((step, i) => {
      const t = setTimeout(() => {
        setCurrentIndex(step.index);
        if (step.found) {
          setFoundIndex(step.index);
        }
      }, i * 600);
      newTimeouts.push(t);
    });

    setTimeouts(newTimeouts);
  };

  const reset = () => {
    clearAllTimeouts();
  };

  return (
    <div>
      {/* 1️⃣ TITLE + DESCRIPTION */}
      <h1>Linear Search</h1>
      <p style={{ color: "#555", marginBottom: 10 }}>
        Linear Search algoritmi elementlarni ketma-ket
        tekshirib chiqadi. Target: <b>{target}</b>
      </p>

      {/* 2️⃣ VISUALIZATION */}
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "flex-end",
          marginBottom: 20
        }}
      >
        {array.map((value, i) => {
          let bg = "#cbd5f5";

          if (i === currentIndex) bg = "#fde047"; // checking
          if (i === foundIndex) bg = "#4ade80"; // found

          return (
            <div
              key={i}
              style={{
                width: 50,
                height: 50,
                background: bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 6,
                fontWeight: "bold"
              }}
            >
              {value}
            </div>
          );
        })}
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
{`function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}`}
      </pre>
    </div>
  );
}
