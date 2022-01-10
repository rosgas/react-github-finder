import { BrowserRouter as Router, Route } from "react-router-dom";
import Background from "./components/assets/main-bg.png";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <div
        className="flex flex-col items-center justify-between h-screen"
        style={{ background: "url(" + Background + ") center center/cover" }}
      >
        <Navbar />

        <main>Main Content</main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
