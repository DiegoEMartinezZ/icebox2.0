import LandingPage from "./views/LandingPage";
import Home from "./views/Home";
import Cart from "./views/Cart";
import GameDetails from "./views/GameDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/game/:productId" element={<GameDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
