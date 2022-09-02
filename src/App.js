import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { News } from "./pages/News";
import { Creators } from "./pages/Creators";
import { Shop } from "./pages/Shop";
import { Single } from "./pages/Single";
import { SingleShoes } from "./pages/SingleShoes";
import { Cart } from "./pages/Cart";
import { Footer } from "./components/Footer/Footer";
import { Creator } from "./pages/Creator";


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/creators" element={<Creators/>} />
          <Route path="/creators/creator" element={<Creator/>} />
          <Route path="/news/single" element={<Single/>} />
          <Route path="/single" element={<SingleShoes/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Footer/>

    </div>
  );
}

export default App;
