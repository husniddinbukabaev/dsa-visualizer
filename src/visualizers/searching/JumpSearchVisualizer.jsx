import { useState } from "react";
import { jumpSearchSteps } from "../../algorithms/searching/JumpSearch";

export default function JumpSearchVisualizer() {
  const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  const target = 13;

  const [active, setActive] = useState(null);
  const [block, setBlock] = useState(null);
  const [found, setFound] = useState(false);
  const [timeouts, setTimeouts] = useState([]);

  const clearAll = () => {
    timeouts.forEach(t => clearTimeout(t));
    setTimeouts([]);
    setActive(null);
    setBlock(null);
    setFound(false);
  };

  const start = () => {
    clearAll();
    const steps = jumpSearchSteps(array, target);
    const t = [];

    steps.forEach((step, i) => {
      t.push(
        setTimeout(() => {
          if (step.type === "jump") {
            setBlock([step.prev, step.curr]);
            setActive(null);
          } else {
            setActive(step.index);
            if (step.found) setFound(true);
          }
        }, i * 600)
      );
    });

    setTimeouts(t);
  };

  const reset = () => clearAll();

  return (
    <div>
      {/* TITLE */}
      <h1>Jump Search</h1>
      <p style={{ color: "#555" }}>
        Saralangan arrayda √n qadam bilan sakrab qidiradi.  
        Target: <b>{target}</b>
      </p>

      {/* ARRAY */}
      <div style={{ display: "flex", gap: 8, margin: "20px 0" }}>
        {array.map((v, i) => {
          let bg = "#e5e7eb";

          if (block && i >= block[0] && i <= block[1]) bg = "#93c5fd";
          if (i === active) bg = "#fde047";
          if (found && i === active) bg = "#4ade80";

          return (
            <div
              key={i}
              style={{
                width: 50,
                height: 50,
                borderRadius: 6,
                background: bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold"
              }}
            >
              {v}
            </div>
          );
        })}
      </div>

      {/* CONTROLS */}
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={start}>▶ Start</button>
        <button onClick={reset}>🔁 Reset</button>
      </div>

      {/* CODE */}
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
{`function jumpSearch(arr, target) {
  const n = arr.length;
  const step = Math.floor(Math.sqrt(n));
  let prev = 0;

  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) return -1;
  }

  for (let i = prev; i < Math.min(step, n); i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}`}
      </pre>
    </div>
  );
}
