import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
