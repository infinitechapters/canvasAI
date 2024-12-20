import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayGround from "./Pages/PlayGround";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playground" element={<PlayGround />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
