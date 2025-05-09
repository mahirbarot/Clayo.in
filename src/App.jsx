import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContextProvider from "./context/GlobalContextProvider";
import "./App.css";

// Import Components
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { NewArrivals } from "./components/NewArrivals";
import { GridBanner } from "./components/GridBanner";
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { About } from "./components/About";
import { Men } from "./components/Men";
import { Women } from "./components/Women";
import Profile from "./components/Profile";
import {DetailedProduct} from "./components/ui/DetailedProduct";
import { Signup } from "./components/SignUp";
import Orders from "./components/Orders";

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <NavBar />

        {/* Define Routes */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" element={<Hero />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/about" element={<About />} />
          <Route path="/detailedProduct" element={<DetailedProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/order" element={<Orders/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;

