import { useState } from "react";
import { hashSearchSteps } from "../../algorithms/searching/HashSearch";

export default function HashSearchVisualizer() {
  // Hash table (key % 7 ga mos joylashtirilgan)
  const table = [
    { key: 42, value: "C" }, // 42 % 7 = 0
    { key: 15, value: "A" }, // 15 % 7 = 1
    null,
    null,
    { key: 18, value: "B" }, // 18 % 7 = 4
    null,
    null
  ];

  const searchKey = 42;

  const [active, setActive] = useState(null);
  const [status, setStatus] = useState("");
  const [timeouts, setTimeouts] = useState([]);

  const reset = () => {
    timeouts.forEach(t => clearTimeout(t));
    setTimeouts([]);
    setActive(null);
    setStatus("");
  };

  const start = () => {
    reset();
    const steps = hashSearchSteps(table, searchKey);
    const t = [];

    steps.forEach((step, i) => {
      t.push(
        setTimeout(() => {
          setActive(step.index);

          if (step.type === "found") setStatus("Topildi ✅");
          if (step.type === "not-found") setStatus("Topilmadi ❌");
        }, i * 800)
      );
    });

    setTimeouts(t);
  };

  return (
    <div>
      {/* TITLE */}
      <h1>Hash Search</h1>

      {/* DEFINITION */}
      <p style={{ maxWidth: 700, lineHeight: 1.6 }}>
        <b>Hash Search</b> — bu qidiruv algoritmi bo‘lib,
        kalit (<i>key</i>) hash function yordamida indeksga
        o‘tkaziladi va element to‘g‘ridan-to‘g‘ri shu joydan
        olinadi. To‘g‘ri hash function ishlatilsa,
        qidiruv vaqti <b>O(1)</b> bo‘ladi.
      </p>

      {/* INFO */}
      <p>
        Qidirilayotgan kalit: <b>{searchKey}</b><br />
        Hash function: <code>key % tableSize</code>
      </p>

      {/* TABLE */}
      <div style={{ display: "flex", gap: 12, margin: "20px 0" }}>
        {table.map((item, i) => {
          let bg = "#e5e7eb";
          if (i === active) bg = "#fde047";
          if (status === "Topildi ✅" && i === active) bg = "#4ade80";

          return (
            <div
              key={i}
              style={{
                width: 90,
                height: 90,
                borderRadius: 10,
                background: bg,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14
              }}
            >
              <b>Index {i}</b>
              {item ? (
                <>
                  <div>key: {item.key}</div>
                  <div>{item.value}</div>
                </>
              ) : (
                <div>null</div>
              )}
            </div>
          );
        })}
      </div>

      {/* CONTROLS */}
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={start}>▶ Start</button>
        <button onClick={reset}>🔁 Reset</button>
      </div>

      {/* STATUS */}
      {status && (
        <h3 style={{ marginTop: 20 }}>
          Natija: {status}
        </h3>
      )}

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
{`function hashSearch(table, key) {
  const index = key % table.length;

  if (table[index] && table[index].key === key) {
    return table[index].value;
  }

  return null;
}`}
      </pre>
    </div>
  );
}


