import { Route, Routes } from "react-router-dom";
import NavBar from "./navbar/nav";
import Home from "./Components/business/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Components/cart/Cart";
import Footer from "./Components/business/Home/Home_components/footer";
import Signin from "./Components/Login/Sgin/sginIn";
import CreateProduct from "./Components/prodects/createProduct";

const App = () => {
  return (
    <div>
      <NavBar />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/sigin" element={<Signin/>} />
      </Routes>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default App;
