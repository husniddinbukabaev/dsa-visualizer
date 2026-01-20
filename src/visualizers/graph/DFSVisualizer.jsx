import { useState } from "react";
import { dfsSteps } from "../../algorithms/graph/DFS";

export default function DFSVisualizer() {
  const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: [],
    F: []
  };

  const positions = {
    A: { x: 200, y: 40 },
    B: { x: 100, y: 120 },
    C: { x: 300, y: 120 },
    D: { x: 60, y: 200 },
    E: { x: 140, y: 200 },
    F: { x: 300, y: 200 }
  };

  const [active, setActive] = useState(null);
  const [visited, setVisited] = useState(new Set());
  const [currentEdge, setCurrentEdge] = useState(null);
  const [timeouts, setTimeouts] = useState([]);

  const reset = () => {
    timeouts.forEach(t => clearTimeout(t));
    setTimeouts([]);
    setActive(null);
    setVisited(new Set());
    setCurrentEdge(null);
  };

  const start = () => {
    reset();
    const steps = dfsSteps(graph, "A");
    const t = [];

    steps.forEach((step, i) => {
      t.push(
        setTimeout(() => {
          if (step.type === "visit") {
            setActive(step.node);
            setVisited(prev => new Set(prev).add(step.node));
          }
          if (step.type === "edge") {
            setCurrentEdge([step.from, step.to]);
          }
        }, i * 800)
      );
    });

    setTimeouts(t);
  };

  return (
    <div>
      <h1>Depth First Search (DFS)</h1>

      <p style={{ maxWidth: 700, lineHeight: 1.6 }}>
        <b>DFS</b> graph yoki tree’da tugunlarni
        imkon qadar chuqur tekshiradi.
        Stack (yoki rekursiya) yordamida ishlaydi.
      </p>

      {/* GRAPH */}
      <svg width="400" height="260" style={{ border: "1px solid #ddd" }}>
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
                currentEdge &&
                currentEdge[0] === from &&
                currentEdge[1] === to
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
          if (visited.has(node)) fill = "#4ade80";
          if (node === active) fill = "#fde047";

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
{`function dfs(graph, node, visited = new Set()) {
  visited.add(node);
  console.log(node);

  for (let neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}`}
      </pre>
    </div>
  );
}
