import { useState } from "react";
import Navbar from "./components/Navbar";
import AlgorithmPage from "./pages/AlgorithmPage";

function App() {
  // Holat nomi: selectedAlgorithm
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);

  return (
    <>
      <Navbar onSelect={setSelectedAlgorithm} />
      <div style={{ paddingTop: "50px" }}>
        {/* To'g'ri o'zgaruvchi nomini yozamiz */}
        <AlgorithmPage algorithm={selectedAlgorithm} />
      </div>
    </>
  );
}

export default App;


