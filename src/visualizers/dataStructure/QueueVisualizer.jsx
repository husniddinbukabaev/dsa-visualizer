import { useState } from "react";

export default function QueueVisualizer() {
  const [queue, setQueue] = useState([]);
  const [value, setValue] = useState("");

  const enqueue = () => {
    if (value === "") return;
    setQueue(prev => [...prev, value]);
    setValue("");
  };

  const dequeue = () => {
    if (!queue.length) return;
    setQueue(prev => prev.slice(1));
  };

  const reset = () => {
    setQueue([]);
    setValue("");
  };

  return (
    <div>
      {/* 1️⃣ TITLE + DESCRIPTION */}
      <h1>Queue (FIFO)</h1>
      <p style={{ color: "#555" }}>
        Queue — <b>FIFO</b> (First In, First Out) prinsipida ishlaydi.
        Amallar: <b>enqueue</b>, <b>dequeue</b>, <b>peek</b>.
      </p>

      {/* 2️⃣ VISUALIZATION */}
      <div
        style={{
          marginTop: 20,
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: 10,
          border: "2px solid #333",
          minHeight: 70
        }}
      >
        {queue.map((item, i) => (
          <div
            key={i}
            style={{
              width: 55,
              height: 45,
              background: "#34d399",
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

        {!queue.length && (
          <span style={{ color: "#999" }}>Queue bo‘sh</span>
        )}
      </div>

      {/* 3️⃣ CONTROLS */}
      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Value"
        />
        <button onClick={enqueue}>➡ Enqueue</button>
        <button onClick={dequeue}>⬅ Dequeue</button>
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
{`class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(x) {
    this.items.push(x);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }
}`}
      </pre>
    </div>
  );
}
