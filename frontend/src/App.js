import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbars from "./components/common/Navbar/Navbars";
import Footer from "./components/common/Footer/Footer";
import Card from "./pages/About/Card";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import './App.css';
import SingleBlog from './pages/SingleBlog';
import CreateArticle from "./pages/CreateArticle";

const App = () => {
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/blog/:id' element={<SingleBlog />} />
        <Route path="/about" element={<Card />} />
        <Route path="/login" element ={<Login />} />
        <Route path="/register" element ={<Register />} />
        <Route path="/createArticle" element ={<CreateArticle />} />
        <Route to='/' />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
