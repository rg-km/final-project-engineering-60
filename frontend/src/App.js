import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbars from "./components/Navbars";
import Card from "./pages/About/Card";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Card />} />
        <Route path="/login" element ={<Login />} />
        <Route path="/register" element ={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
