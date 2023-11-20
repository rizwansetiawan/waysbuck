import Error404 from "./Pages/Error404.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import PageCoffee1 from "./Pages/PageCoffee1.jsx";
import PageCoffee2 from "./Pages/PageCoffee2.jsx";
import Register from "./Pages/Register.jsx";
import PageCoffee3 from "./Pages/PageCoffee3.jsx";
import PageCoffee4 from "./Pages/PageCoffee4.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Fragments/Cart.jsx";
import Profile from "./components/Fragments/Profile.jsx";
import Admin from "./components/Fragments/Admin.jsx";
import AddToping from "./components/Fragments/AddToping.jsx";
import AddProduct from "./components/Fragments/AddProduct.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail-coffee1" element={<PageCoffee1 />} />
        <Route path="/detail-coffee2" element={<PageCoffee2 />} />
        <Route path="/detail-coffee3" element={<PageCoffee3 />} />
        <Route path="/detail-coffee4" element={<PageCoffee4 />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addtoping" element={<AddToping />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
