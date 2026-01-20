import { useState } from "react";
import {
  insertBST,
  inorderBST
} from "../../algorithms/dataStructure/BinarySearchTree";

export default function BinarySearchTreeVisualizer() {
  const [root, setRoot] = useState(null);
  const [input, setInput] = useState("");
  const [order, setOrder] = useState([]);

  const insert = () => {
    if (input === "") return;

    const value = Number(input);
    const newRoot = insertBST(
      JSON.parse(JSON.stringify(root)),
      value
    );

    setRoot(newRoot);
    setOrder(inorderBST(newRoot, []));
    setInput("");
  };

  const reset = () => {
    setRoot(null);
    setOrder([]);
  };

  return (
    <div>
      {/* 1️⃣ TITLE + DESCRIPTION */}
      <h1>Binary Search Tree</h1>
      <p style={{ color: "#555" }}>
        Binary Search Tree — bu Binary Tree bo‘lib,
        <b> left &lt; root &lt; right </b> qoidasiga amal qiladi.
      </p>

      {/* 2️⃣ VISUALIZATION */}
      <div style={{ marginTop: 20 }}>
        <p><b>Inorder Traversal (Sorted Output):</b></p>

        <div style={{ display: "flex", gap: 10 }}>
          {order.map((v, i) => (
            <div
              key={i}
              style={{
                width: 45,
                height: 45,
                background: "#60a5fa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 6,
                fontWeight: "bold"
              }}
            >
              {v}
            </div>
          ))}
        </div>
      </div>

      {/* 3️⃣ CONTROLS */}
      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <input
          type="number"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Insert value"
        />
        <button onClick={insert}>➕ Insert</button>
        <button onClick={reset}>🔁 Reset</button>
      </div>

      {/* 4️⃣ CODE */}
      <h3 style={{ marginTop: 30 }}>Algorithm Code (Insert)</h3>
      <pre
        style={{
          background: "#0f172a",
          color: "#e5e7eb",
          padding: 16,
          borderRadius: 8,
          overflowX: "auto"
        }}
      >
{`function insertBST(root, value) {
  if (!root) return { value, left: null, right: null };

  if (value < root.value) {
    root.left = insertBST(root.left, value);
  } else {
    root.right = insertBST(root.right, value);
  }

  return root;
}`}
      </pre>
    </div>
  );
}
