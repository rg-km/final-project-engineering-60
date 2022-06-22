import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbars from "./components/Navbars";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cards from "./card/cards";
import Footer from "./components/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <Navbars />
      <Footer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element ={<Login />} />
        <Route path="/register" element ={<Register />} />
        <Route path="/card" element ={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
