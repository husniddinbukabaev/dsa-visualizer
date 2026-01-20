import { useState } from "react";

export default function RecursionVisualizer() {
  const [n, setN] = useState(4);
  const [stack, setStack] = useState([]);
  const [result, setResult] = useState(null);
  const [timeouts, setTimeouts] = useState([]);

  const clearAll = () => {
    timeouts.forEach(t => clearTimeout(t));
    setTimeouts([]);
    setStack([]);
    setResult(null);
  };

  const start = () => {
    clearAll();
    const ts = [];

    function simulate(n, depth = 0) {
      ts.push(
        setTimeout(() => {
          setStack(prev => [...prev, `fact(${n})`]);
        }, depth * 800)
      );

      if (n === 1) {
        ts.push(
          setTimeout(() => {
            setResult(1);
          }, (depth + 1) * 800)
        );
        return 1;
      }

      const res = n * simulate(n - 1, depth + 1);

      ts.push(
        setTimeout(() => {
          setStack(prev => prev.slice(0, -1));
        }, (depth + 2) * 800)
      );

      return res;
    }

    simulate(n);
    setTimeouts(ts);
  };

  return (
    <div>
      {/* 1️⃣ TITLE + DESCRIPTION */}
      <h1>Recursion (Call Stack)</h1>
      <p style={{ color: "#555" }}>
        Recursion — funksiya <b>o‘zini o‘zi chaqirishi</b>.
        Quyida factorial hisoblash jarayonida
        <b>call stack</b> qanday to‘lishi va bo‘shashini ko‘rasiz.
      </p>

      {/* 2️⃣ VISUALIZATION */}
      <div
        style={{
          marginTop: 20,
          width: 200,
          minHeight: 250,
          border: "2px solid #333",
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "center",
          padding: 10,
          gap: 6
        }}
      >
        {stack.map((item, i) => (
          <div
            key={i}
            style={{
              width: 160,
              height: 40,
              background: "#f472b6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 6,
              fontWeight: "bold"
            }}
          >
            {item}
          </div>
        ))}

        {!stack.length && (
          <span style={{ color: "#999" }}>Call stack bo‘sh</span>
        )}
      </div>

      {/* 3️⃣ CONTROLS */}
      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <input
          type="number"
          min="1"
          value={n}
          onChange={e => setN(Number(e.target.value))}
        />
        <button onClick={start}>▶ Start</button>
        <button onClick={clearAll}>🔁 Reset</button>
      </div>

      {/* RESULT */}
      {result !== null && (
        <p style={{ marginTop: 15 }}>
          <b>Result:</b> {result}
        </p>
      )}

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
{`function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}`}
      </pre>
    </div>
  );
}
