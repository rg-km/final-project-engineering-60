// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbars from "./components/Navbars";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element ={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
