import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppContent from "./AppContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <AppContent />
      </Router>
    </>
  );
}

export default App;
