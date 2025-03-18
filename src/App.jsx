import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

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
import Service5 from "./pages/Services/Service5";
import Service6 from "./pages/Services/Service6";
import Ug1 from "./pages/Services/ug/Ug1";
import Ug2 from "./pages/Services/ug/Ug2";
import Ug3 from "./pages/Services/ug/Ug3";
import Ug4 from "./pages/Services/ug/Ug4";
import Pg1 from "./pages/Services/pg/Pg1";
import Pg2 from "./pages/Services/pg/Pg2";
import Pg3 from "./pages/Services/pg/Pg3";
import Pg4 from "./pages/Services/pg/Pg4";
import Placement from "./pages/Placement/Placement";
import Enquiry from "./pages/Enquiry/Enquiry";
import Admission from "./pages/Admission/Admission";
import { useEffect } from "react";

function App() {
  
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to top
    }, [pathname]);

    return null;
  };

  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-staff" element={<Staff />} />
          <Route path="/founding-member" element={<Founding />} />
          <Route path="/placements" element={<Placement />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/admission" element={<Admission />} />

          {/* Services */}
          <Route path="/architecture-interior-design" element={<Service1 />} />
          <Route path="/graphic-design" element={<Service2 />} />
          <Route path="/fashion-design" element={<Service3 />} />
          <Route path="/web-design-development" element={<Service4 />} />
          <Route path="/undergraduate-courses" element={<Service5 />} />
          <Route path="/postgraduate-courses" element={<Service6 />} />

          {/* ug */}
          <Route path="/undergraduate-course/Ba" element={<Ug1 />} />
          <Route path="/undergraduate-course/bcom" element={<Ug2 />} />
          <Route path="/undergraduate-course/Bsc" element={<Ug3 />} />
          <Route path="/undergraduate-course/Bba" element={<Ug4 />} />

          {/* pg */}
          <Route path="/postgraduate-course/Ma" element={<Pg1 />} />
          <Route path="/postgraduate-course/Mcom" element={<Pg2 />} />
          <Route path="/postgraduate-course/Msc" element={<Pg3 />} />
          <Route path="/postgraduate-course/Mba" element={<Pg4 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
