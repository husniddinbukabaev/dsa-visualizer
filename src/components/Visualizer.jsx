import BubbleSortVisualizer from "../visualizers/sorting/BubbleSortVisualizer";
import InsertionSortVisualizer from "../visualizers/sorting/InsertionSortVisualizer";
import SelectionSortVisualizer from "../visualizers/sorting/SelectionSortVisualizer";
import MergeSortVisualizer from "../visualizers/sorting/MergeSortVisualizer";
import QuickSortVisualizer from "../visualizers/sorting/QuickSortVisualizer";
import HeapSortVisualizer from "../visualizers/sorting/HeapSortVisualizer";
import LinearSearchVisualizer from "../visualizers/searching/LinearSearchVisualizer";
import BinarySearchVisualizer from "../visualizers/searching/BinarySearchVisualizer";
import JumpSearchVisualizer from "../visualizers/searching/JumpSearchVisualizer";
import HashSearchVisualizer from "../visualizers/searching/HashSearchVisualizer";
import DFSVisualizer from "../visualizers/graph/DFSVisualizer";
import BFSVisualizer from "../visualizers/graph/BFSVisualizer";
import TopologicalSortVisualizer from "../visualizers/graph/TopologicalSortVisualizer";
import KahnVisualizer from "../visualizers/graph/KahnVisualizer";
import PrimVisualizer from "../visualizers/graph/PrimVisualizer";
import BinaryTreeVisualizer from "../visualizers/dataStructure/BinaryTreeVisualizer";
import BinarySearchTreeVisualizer from "../visualizers/dataStructure/BinarySearchTreeVisualizer";
import StackVisualizer from "../visualizers/dataStructure/StackVisualizer";
import QueueVisualizer from "../visualizers/dataStructure/QueueVisualizer";
import LinkedListVisualizer from "../visualizers/dataStructure/LinkedListVisualizer";
import RecursionVisualizer from "../visualizers/dataStructure/RecursionVisualizer";

// keyin boshqa algoritmlar ham shu yerga qo‘shiladi

export default function Visualizer({ algorithm }) {
  switch (algorithm) {
    case "Bubble Sort":
      return <BubbleSortVisualizer />;

    case "Insertion Sort":
      return <InsertionSortVisualizer />;

    case "Selection Sort":
      return <SelectionSortVisualizer />;

    case "Merge Sort":
      return <MergeSortVisualizer />;

    case "Quick Sort":
      return <QuickSortVisualizer />;

    case "Heap Sort":
      return <HeapSortVisualizer />;

    case "Linear Search":
      return <LinearSearchVisualizer />;

    case "Binary Search":
      return <BinarySearchVisualizer />;

    case "Jump Search":
      return <JumpSearchVisualizer />;

    case "Hash Search":
      return <HashSearchVisualizer />;

    case "DFS":
      return <DFSVisualizer />;

    case "BFS":
      return <BFSVisualizer />;
      
    case "Topological Sort":
      return <TopologicalSortVisualizer />;

    case "Kahn's Algorithm":
      return <KahnVisualizer />;

    case "Prim's Algorithm":
      return <PrimVisualizer />;

    case "Binary Tree":
      return <BinaryTreeVisualizer />;

    case "Binary Search Tree":
      return <BinarySearchTreeVisualizer />;

    case "Stack":
      return <StackVisualizer />;

    case "Queue":
      return <QueueVisualizer />;

    case "Linked List":
      return <LinkedListVisualizer />;

    case "Recursion":
      return <RecursionVisualizer />;

   

    default:
      return (
        <p style={{ padding: 20 }}>
          Algoritm tanlang 👆
        </p>
      );
  }
}



