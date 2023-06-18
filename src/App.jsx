import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/habit" element={<Habit />} /> */}
      </Routes>
    </div>
  );
}

export default App;
