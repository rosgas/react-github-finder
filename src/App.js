import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GitHubProvider } from "./context/github/GitHubContext";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Background from "./components/assets/main-bg.png";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <GitHubProvider>
      <Router>
        <div
          className="flex flex-col items-center justify-between h-screen leading-normal text-slate-100 overflow-hidden"
          style={{ background: "url(" + Background + ") center center/cover" }}
        >
          <Navbar />

          <main className="container mx-auto">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/notfound" element={<NotFound />}></Route>
              <Route path="/*" element={<NotFound />}></Route>
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </GitHubProvider>
  );
}

export default App;
