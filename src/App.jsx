import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";

import Staff from "./pages/Staff/Staff";
import Founding from "./pages/Founding/Founding";
import Service1 from "./pages/Services/Service1";
import Service2 from "./pages/Services/Service2";
import Service3 from "./pages/Services/Service3";
import Service4 from "./pages/Services/Service4";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-staff" element={<Staff />} />
          <Route path="/founding-member" element={<Founding />} />

          {/* Services */}
          <Route path="/architecture-interior-design" element={<Service1 />} />
          <Route path="/graphic-design" element={<Service2 />} />
          <Route path="/fashion-design" element={<Service3 />} />
          <Route path="/web-design-development" element={<Service4 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
