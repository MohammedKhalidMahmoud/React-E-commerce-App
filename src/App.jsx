import { Route,Routes } from "react-router-dom"
import Nav from "./navbar/nav"
import Home from "./Components/business/Home"
import About from "./Components/business/About"
import Cart from "./Components/business/Cart"


const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App
