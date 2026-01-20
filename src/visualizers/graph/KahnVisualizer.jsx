import { useState } from "react";
import { kahnSteps } from "../../algorithms/graph/Kahn";

const graph = {
  A: ["C"],
  B: ["C", "D"],
  C: ["E"],
  D: ["F"],
  E: [],
  F: []
};

export default function KahnVisualizer() {
  const [stepIndex, setStepIndex] = useState(-1);
  const [steps, setSteps] = useState([]);

  const start = () => {
    const s = kahnSteps(graph);
    setSteps(s);
    setStepIndex(0);
  };

  const reset = () => {
    setSteps([]);
    setStepIndex(-1);
  };

  const step = steps[stepIndex];

  return (
    <div>
      {/* 1️⃣ TITLE + DESCRIPTION */}
      <h1>Kahn’s Algorithm</h1>
      <p style={{ color: "#555", marginBottom: 10 }}>
        Kahn’s Algorithm — bu <b>Directed Acyclic Graph</b> uchun
        <b> Topological Sort</b>ni BFS (queue) yordamida topish algoritmi.
      </p>

      {/* 2️⃣ VISUALIZATION */}
      {step && (
        <div style={{ marginBottom: 20 }}>
          <p><b>Current Node:</b> {step.current}</p>
          <p><b>Queue:</b> {step.queue.join(", ") || "Empty"}</p>
          <p><b>Result:</b> {step.result.join(" → ")}</p>
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
{`function kahn(graph) {
  const indegree = {};
  const queue = [];
  const result = [];

  for (let node in graph) indegree[node] = 0;
  for (let u in graph)
    for (let v of graph[u]) indegree[v]++;

  for (let node in indegree)
    if (indegree[node] === 0) queue.push(node);

  while (queue.length) {
    const node = queue.shift();
    result.push(node);

    for (let v of graph[node]) {
      indegree[v]--;
      if (indegree[v] === 0) queue.push(v);
    }
  }

  return result;
}`}
      </pre>
    </div>
  );
}



