import { useState } from "react";

export default function LinkedListVisualizer() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const insert = () => {
    if (value === "") return;
    setList(prev => [...prev, value]);
    setValue("");
  };

  const remove = () => {
    if (!list.length) return;
    setList(prev => prev.slice(0, -1));
  };

  const reset = () => {
    setList([]);
    setValue("");
  };

  return (
    <div>
      {/* 1️⃣ TITLE + DESCRIPTION */}
      <h1>Linked List (Singly)</h1>
      <p style={{ color: "#555" }}>
        Linked List — bu ketma-ket joylashgan tugunlar bo‘lib,
        har bir tugun <b>value</b> va <b>next</b> pointerga ega.
      </p>

      {/* 2️⃣ VISUALIZATION */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginTop: 20,
          flexWrap: "wrap"
        }}
      >
        {list.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 60,
                height: 45,
                background: "#93c5fd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 6,
                fontWeight: "bold"
              }}
            >
              {item}
            </div>

            {i !== list.length - 1 && (
              <span style={{ margin: "0 8px", fontSize: 22 }}>→</span>
            )}
          </div>
        ))}

        {!list.length && (
          <span style={{ color: "#999" }}>Linked List bo‘sh</span>
        )}
      </div>

      {/* 3️⃣ CONTROLS */}
      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Value"
        />
        <button onClick={insert}>➕ Insert</button>
        <button onClick={remove}>❌ Delete Last</button>
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
{`class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let cur = this.head;
    while (cur.next) cur = cur.next;
    cur.next = node;
  }
}`}
      </pre>
    </div>
  );
}
