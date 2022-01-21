import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GitHubProvider } from "./context/github/GitHubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Home from "./pages/Home";
import User from "./pages/User";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Background from "./components/assets/main-bg.png";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <GitHubProvider>
      <AlertProvider>
        <Router>
          <div
            className="flex flex-col items-center justify-between h-screen leading-normal text-slate-100 overflow-hidden"
            style={{
              background: "url(" + Background + ") center center/cover",
            }}
          >
            <Navbar />

            <main className=" sm:container sm:mx-auto w-full px-3.5">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/user/:login" element={<User />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/notfound" element={<NotFound />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GitHubProvider>
  );
}

export default App;
