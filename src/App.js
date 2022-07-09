import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./page-components/Home";
import Game from "./page-components/Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
