import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./page-components/Home";
import Game from "./page-components/Game";
import Rules from "./page-components/Rules";
import SheldonRules from "./page-components/SheldonRules";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/sheldonRules" element={<SheldonRules />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
