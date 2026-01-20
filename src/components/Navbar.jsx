import "./Navbar.css";

export default function Navbar({ onSelect }) {
  const topics = [
    "Bubble Sort",
    "Insertion Sort",
    "Selection Sort",
    "Merge Sort",
    "Quick Sort",
    "Heap Sort",
    "Linear Search",
    "Binary Search",
    "Jump Search",
    "Hash Search",
    "DFS",
    "BFS",
    "Topological Sort",
    "Kahn's Algorithm",
    "Prim's Algorithm",
    "Binary Tree",
    "Binary Search Tree",
    "Stack",
    "Queue",
    "Linked List",
    "Recursion"
  ];

  return (
    <nav className="navbar">
     

      {/* 🔄 yon tomonga suriladigan qism */}
      <div className="scroll-menu">
        {topics.map(item => (
          <button
            key={item}
            className="nav-btn"
            onClick={() => onSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}

  