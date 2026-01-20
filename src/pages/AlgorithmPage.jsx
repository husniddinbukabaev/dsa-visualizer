import Visualizer from "../components/Visualizer";

export default function AlgorithmPage({ algorithm }) {
  // 🟦 Hech narsa tanlanmagan holat
  if (!algorithm) {
    return (
      <div
        style={{
          padding: 40,
          textAlign: "center",
          color: "#64748b"
        }}
      >
        <h2> Algoritm tanlang</h2>
        <p>
          Yuqoridagi navbar’dan istalgan algoritmni tanlab,
          uning ishlash jarayonini ko‘rishingiz mumkin.
        </p>
      </div>
    );
  }

  // 🟩 Algoritm tanlangan holat
  return (
    <div style={{ padding: 20 }}>
      <Visualizer algorithm={algorithm} />
    </div>
  );
}

