import { useState } from "react";
import { binarySearchSteps } from "../../algorithms/searching/BinarySearch";

export default function BinarySearchVisualizer() {
  const initialArray = [1, 3, 5, 7, 9, 11, 13];
  const target = 7;

  const [low, setLow] = useState(null);
  const [mid, setMid] = useState(null);
  const [high, setHigh] = useState(null);
  const [found, setFound] = useState(false);
  const [timeouts, setTimeouts] = useState([]);

  const clearAllTimeouts = () => {
    timeouts.forEach(t => clearTimeout(t));
    setTimeouts([]);
    setLow(null);
    setMid(null);
    setHigh(null);
    setFound(false);
  };

  const start = () => {
    clearAllTimeouts();

    const steps = binarySearchSteps(initialArray, target);
    const newTimeouts = [];

    steps.forEach((step, i) => {
      const t = setTimeout(() => {
        setLow(step.low);
        setMid(step.mid);
        setHigh(step.high);
        if (step.found) setFound(true);
      }, i * 700);
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
      <h1>Binary Search</h1>
      <p style={{ color: "#555", marginBottom: 10 }}>
        Binary Search faqat <b>saralangan array</b> uchun ishlaydi.  
        Target: <b>{target}</b>
      </p>

      {/* 2️⃣ VISUALIZATION */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        {initialArray.map((value, i) => {
          let bg = "#e5e7eb";

          if (i === mid) bg = "#fde047";      // mid
          if (i === low) bg = "#93c5fd";      // low
          if (i === high) bg = "#fca5a5";     // high
          if (found && i === mid) bg = "#4ade80"; // found

          return (
            <div
              key={i}
              style={{
                width: 55,
                height: 55,
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

      {/* 3️⃣ POINTER INFO */}
      <p>
        low: {low} | mid: {mid} | high: {high}
      </p>

      {/* 4️⃣ CONTROLS */}
      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <button onClick={start}>▶ Start</button>
        <button onClick={reset}>🔁 Reset</button>
      </div>

      {/* 5️⃣ CODE */}
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
{`function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}`}
      </pre>
    </div>
  );
}
