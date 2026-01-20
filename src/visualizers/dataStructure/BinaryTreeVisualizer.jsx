import { useState } from "react";
import {
  inorderSteps,
  preorderSteps,
  postorderSteps
} from "../../algorithms/dataStructure/BinaryTree";

/*
        10
       /  \
      5    15
     / \     \
    2   7     20
*/
const tree = {
  value: 10,
  left: {
    value: 5,
    left: { value: 2 },
    right: { value: 7 }
  },
  right: {
    value: 15,
    right: { value: 20 }
  }
};

export default function BinaryTreeVisualizer() {
  const [visited, setVisited] = useState([]);
  const [timeouts, setTimeouts] = useState([]);

  const clearAll = () => {
    timeouts.forEach(t => clearTimeout(t));
    setTimeouts([]);
    setVisited([]);
  };

  const animate = (order) => {
    clearAll();
    const ts = [];

    order.forEach((val, i) => {
      const t = setTimeout(() => {
        setVisited(prev => [...prev, val]);
      }, i * 700);
      ts.push(t);
    });

    setTimeouts(ts);
  };

  return (
    <div>
      {/* 1️⃣ TITLE + DESCRIPTION */}
      <h1>Binary Tree Traversal</h1>
      <p style={{ color: "#555" }}>
        Binary Tree — har bir tugun <b>ko‘pi bilan 2 ta child</b> ga ega.
        Quyida Inorder, Preorder va Postorder traversal ko‘rsatiladi.
      </p>

      {/* 2️⃣ VISUALIZATION */}
      <div style={{ marginTop: 20 }}>
        <p><b>Visited Order:</b></p>
        <div style={{ display: "flex", gap: 10 }}>
          {visited.map((v, i) => (
            <div
              key={i}
              style={{
                width: 45,
                height: 45,
                background: "#4ade80",
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
        <button onClick={() => animate(inorderSteps(tree))}>
          Inorder
        </button>
        <button onClick={() => animate(preorderSteps(tree))}>
          Preorder
        </button>
        <button onClick={() => animate(postorderSteps(tree))}>
          Postorder
        </button>
        <button onClick={clearAll}>🔁 Reset</button>
      </div>

      {/* 4️⃣ CODE */}
      <h3 style={{ marginTop: 30 }}>Algorithm Code (Inorder)</h3>
      <pre
        style={{
          background: "#0f172a",
          color: "#e5e7eb",
          padding: 16,
          borderRadius: 8,
          overflowX: "auto"
        }}
      >
{`function inorder(node) {
  if (!node) return;
  inorder(node.left);
  visit(node);
  inorder(node.right);
}`}
      </pre>
    </div>
  );
}
