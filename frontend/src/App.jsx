import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./styles/theme";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import ContactUs from "./pages/Contact";
import Donation from "./pages/Donation";
import NotFound from "./pages/NotFound"; // Add NotFound page

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Box>
            <Navbar />
            <Box sx={{ minHeight: "100vh", pt: { xs: 8, md: 10 } }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/donate" element={<Donation />} />
                <Route path="*" element={<NotFound />} /> {/* Add 404 page */}
              </Routes>
            </Box>
            <Footer />
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
