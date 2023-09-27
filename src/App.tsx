import { useState } from "react";
import { EditorContent } from "@tiptap/react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <EditorContent />
    </div>
  );
}

export default App;
