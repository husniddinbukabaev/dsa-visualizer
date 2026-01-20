import { useState } from "react";

export default function StackVisualizer() {
  const [stack, setStack] = useState([]);
  const [value, setValue] = useState("");

  const push = () => {
    if (value === "") return;
    setStack(prev => [...prev, value]);
    setValue("");
  };

  const pop = () => {
    if (!stack.length) return;
    setStack(prev => prev.slice(0, -1));
  };

  const reset = () => {
    setStack([]);
    setValue("");
  };

  return (
    <div>
      {/* 1️⃣ TITLE + DESCRIPTION */}
      <h1>Stack (LIFO)</h1>
      <p style={{ color: "#555" }}>
        Stack — <b>LIFO</b> (Last In, First Out) prinsipida ishlaydi.
        Amallar: <b>push</b>, <b>pop</b>, <b>peek</b>.
      </p>

      {/* 2️⃣ VISUALIZATION */}
      <div
        style={{
          marginTop: 20,
          width: 120,
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
              width: 90,
              height: 40,
              background: "#fbbf24",
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
      </div>

      {/* 3️⃣ CONTROLS */}
      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Value"
        />
        <button onClick={push}>⬆ Push</button>
        <button onClick={pop}>⬇ Pop</button>
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
{`class Stack {
  constructor() {
    this.items = [];
  }

  push(x) {
    this.items.push(x);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}`}
      </pre>
    </div>
  );
}
