import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Workshops from "./pages/Workshops";
import Bookings from "./pages/Bookings"; // ✅ added

import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />

        {/* Main App Routes */}
        <Route
          path="/*"
          element={
            <>
              <Navbar user={user} setUser={setUser} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/workshops" element={<Workshops />} />
                <Route path="/bookings" element={<Bookings />} /> {/* ✅ added */}
              </Routes>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;