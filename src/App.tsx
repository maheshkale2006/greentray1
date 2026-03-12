import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Shop from "./pages/Shop";
import BuildTray from "./pages/BuildTray";
import IndividualTray from "./pages/IndividualTray";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Learn from "./pages/Learn";
import GuideDetail from "./pages/GuideDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        {/* TOAST MESSAGE SYSTEM */}
        <Toaster position="top-right" reverseOrder={false} />

        <Routes>

          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/:id" element={<BlogDetail/>}/>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Auth */}
          <Route path="/auth" element={<Auth />} />

          {/* Shop */}
          <Route path="/shop" element={<Shop />} />

          {/* Build Tray */}
          <Route path="/build-tray" element={<BuildTray />} />

          {/* Individual Plants */}
          <Route path="/individual" element={<IndividualTray />} />

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Learn */}
          <Route path="/learn" element={<Learn />} />

          {/* Guide Detail */}
          <Route path="/guide/:id" element={<GuideDetail />} />

        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;