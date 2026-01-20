import { useState } from "react";
import { primSteps } from "../../algorithms/graph/Prim";

const graph = {
  A: { B: 2, C: 3 },
  B: { A: 2, C: 1, D: 1 },
  C: { A: 3, B: 1, D: 4 },
  D: { B: 1, C: 4 }
};

export default function PrimVisualizer() {
  const [steps, setSteps] = useState([]);
  const [index, setIndex] = useState(-1);

  const start = () => {
    const s = primSteps(graph, "A");
    setSteps(s);
    setIndex(0);
  };

  const reset = () => {
    setSteps([]);
    setIndex(-1);
  };

  const step = steps[index];

  return (
    <div>
      {/* 1️⃣ TITLE + DESCRIPTION */}
      <h1>Prim’s Algorithm</h1>
      <p style={{ color: "#555", marginBottom: 10 }}>
        Prim’s Algorithm — bu <b>weighted, undirected graph</b> uchun
        <b> Minimum Spanning Tree (MST)</b> topish algoritmi.
        Har safar eng kichik og‘irlikka ega bo‘lgan qirra tanlanadi.
      </p>

      {/* 2️⃣ VISUALIZATION */}
      {step && (
        <div style={{ marginBottom: 20 }}>
          <p><b>Current Node:</b> {step.current}</p>
          <p><b>Visited:</b> {step.visited.join(", ")}</p>
          <p>
            <b>MST Edges:</b>{" "}
            {step.mst.map(e => `${e.from}-${e.to}(${e.weight})`).join(", ")}
          </p>
          <p><b>Total Weight:</b> {step.totalWeight}</p>
        </div>
      )}

      {/* 3️⃣ CONTROLS */}
      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
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
{`function prim(graph, start) {
  const visited = new Set();
  const mst = [];
  let total = 0;

  visited.add(start);

  while (visited.size < Object.keys(graph).length) {
    let minEdge = null;

    for (let u of visited) {
      for (let v in graph[u]) {
        if (!visited.has(v)) {
          const w = graph[u][v];
          if (!minEdge || w < minEdge.weight) {
            minEdge = { from: u, to: v, weight: w };
          }
        }
      }
    }

    mst.push(minEdge);
    total += minEdge.weight;
    visited.add(minEdge.to);
  }

  return mst;
}`}
      </pre>
    </div>
  );
}
