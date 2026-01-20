import { useState } from "react";
import { topoSortSteps } from "../../algorithms/graph/TopologicalSort";

export default function TopologicalSortVisualizer() {
  // DAG
  const graph = {
    A: ["C"],
    B: ["C", "D"],
    C: ["E"],
    D: ["F"],
    E: ["F"],
    F: []
  };

  const positions = {
    A: { x: 60, y: 60 },
    B: { x: 60, y: 140 },
    C: { x: 200, y: 100 },
    D: { x: 200, y: 200 },
    E: { x: 340, y: 100 },
    F: { x: 480, y: 150 }
  };

  const [queue, setQueue] = useState([]);
  const [processed, setProcessed] = useState([]);
  const [activeEdge, setActiveEdge] = useState(null);
  const [timeouts, setTimeouts] = useState([]);

  const reset = () => {
    timeouts.forEach(t => clearTimeout(t));
    setTimeouts([]);
    setQueue([]);
    setProcessed([]);
    setActiveEdge(null);
  };

  const start = () => {
    reset();
    const steps = topoSortSteps(graph);
    const t = [];

    steps.forEach((step, i) => {
      t.push(
        setTimeout(() => {
          if (step.type === "enqueue") {
            setQueue(q => [...q, step.node]);
          }

          if (step.type === "process") {
            setQueue(q => q.filter(n => n !== step.node));
            setProcessed(p => [...p, step.node]);
          }

          if (step.type === "decrease") {
            setActiveEdge([step.from, step.to]);
          }
        }, i * 800)
      );
    });

    setTimeouts(t);
  };

  return (
    <div>
      <h1>Topological Sort (Kahn’s Algorithm)</h1>

      <p style={{ maxWidth: 700, lineHeight: 1.6 }}>
        <b>Topological Sort</b> — DAG dagi tugunlarni
        bog‘liqlik ketma-ketligiga ko‘ra tartiblash algoritmi.
        Kahn algoritmi <b>indegree</b> va <b>queue</b> dan foydalanadi.
      </p>

      {/* GRAPH */}
      <svg width="560" height="260" style={{ border: "1px solid #ddd" }}>
        {/* EDGES */}
        {Object.entries(graph).map(([from, list]) =>
          list.map(to => (
            <line
              key={from + to}
              x1={positions[from].x}
              y1={positions[from].y}
              x2={positions[to].x}
              y2={positions[to].y}
              stroke={
                activeEdge &&
                activeEdge[0] === from &&
                activeEdge[1] === to
                  ? "orange"
                  : "#999"
              }
              strokeWidth="2"
            />
          ))
        )}

        {/* NODES */}
        {Object.keys(graph).map(node => {
          let fill = "#e5e7eb";
          if (queue.includes(node)) fill = "#fde047";     // queue
          if (processed.includes(node)) fill = "#4ade80"; // done

          return (
            <g key={node}>
              <circle
                cx={positions[node].x}
                cy={positions[node].y}
                r="18"
                fill={fill}
              />
              <text
                x={positions[node].x}
                y={positions[node].y + 5}
                textAnchor="middle"
                fontWeight="bold"
              >
                {node}
              </text>
            </g>
          );
        })}
      </svg>

      {/* QUEUE + RESULT */}
      <p><b>Queue:</b> {queue.join(" , ") || "—"}</p>
      <p><b>Topological Order:</b> {processed.join(" → ")}</p>

      {/* CONTROLS */}
      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
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
{`function topologicalSort(graph) {
  const indegree = {};
  const queue = [];
  const result = [];

  for (let u in graph) indegree[u] = 0;
  for (let u in graph) {
    for (let v of graph[u]) indegree[v]++;
  }

  for (let node in indegree) {
    if (indegree[node] === 0) queue.push(node);
  }

  while (queue.length) {
    const u = queue.shift();
    result.push(u);

    for (let v of graph[u]) {
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
